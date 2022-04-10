import { useState } from "react"
import { ButtonGroup, FormControl, InputGroup, Table, ToggleButton, Nav } from "react-bootstrap"
import LocationTable from "./LocationTable"
import MatrixTable from "./MatrixTable"
import { DistanceMatrixProvider, useDistanceMatrixContext } from "../../../contexts/DistanceMatrixContext"

function DistanceMatrixDetail() {
    const { view, setView } = useDistanceMatrixContext()

    return <><ButtonGroup>
        {/* <ToggleButton
            type="radio"
            checked={'locationTable' === view}
            onClick={() => }
        >
            Location Table
        </ToggleButton>
        <ToggleButton
            type="radio"
            checked={'distanceMatrixTable' === view}
            onClick={() => setView('distanceMatrixTable')}
        >
            Matrix View (Distance)
        </ToggleButton>
        <ToggleButton
            type="radio"
            checked={'durationMatrixTable' === view}
            onClick={() => setView('durationMatrixTable')}
        >
            Matrix View (Duration)
        </ToggleButton> */}
        <Nav variant="tabs" defaultActiveKey="/locationTable" onSelect={setView}>
            <Nav.Item >
                <Nav.Link eventKey="locationTable">Location Table</Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link eventKey="distanceMatrixTable">Matrix View (Distance)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="durationMatrixTable">Matrix View (Duration)</Nav.Link>
            </Nav.Item>
        </Nav>
    </ButtonGroup>
        {view === 'locationTable' && <LocationTable />}
        {view === 'distanceMatrixTable' && <MatrixTable type='distances' />}
        {view === 'durationMatrixTable' && <MatrixTable type='durations' />}
    </>
}

export default function DistanceMatrixWidget() {

    return (
        <DistanceMatrixProvider>
            <DistanceMatrixDetail />
        </DistanceMatrixProvider>
    )
}
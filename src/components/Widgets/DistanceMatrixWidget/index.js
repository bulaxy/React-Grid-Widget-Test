import { useState } from "react"
import { ButtonGroup, FormControl, InputGroup, Table, ToggleButton } from "react-bootstrap"
import LocationTable from "./LocationTable"
import MatrixTable from "./MatrixTable"
import { DistanceMatrixProvider, useDistanceMatrixContext } from "../../../contexts/DistanceMatrixContext"

function DistanceMatrixDetail() {
    const { view, setView } = useDistanceMatrixContext()

    return <><ButtonGroup>
        <ToggleButton
            type="radio"
            checked={'locationTable' === view}
            onClick={() => setView('locationTable')}
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
        </ToggleButton>
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
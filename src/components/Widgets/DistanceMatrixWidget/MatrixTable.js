import { useState } from "react"
import { FormControl, InputGroup, Table } from "react-bootstrap"
import { IconBase } from "react-icons"
import { useDistanceMatrixContext } from "../../../contexts/DistanceMatrixContext"
import useDebounce from "../../../hooks/useDebounce"

export default function LocationTable({ type }) {
    const { locations, matrixData } = useDistanceMatrixContext()
    const [inputValue, setInputValue] = useState()

    return (
        <>
            <FormControl onChange={event => setInputValue(event.target.value)} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th />
                        {locations.map(location => <th key={`matrixTableHeaderKey-${location.location.lat}-${location.location.lng}`}>{location.address}</th>)}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.map((location, i) =>
                        <tr key={`matrixTableRowKey-${location.location.lat}-${location.location.lng}`}>
                            <td>{location.address}</td>
                            {matrixData?.[type]?.[i].map(value =>
                                <td>
                                    {value}
                                </td>
                            )}
                            <td>{matrixData?.[type]?.[i].reduce((a, b) => a + b, 0)}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    )
}
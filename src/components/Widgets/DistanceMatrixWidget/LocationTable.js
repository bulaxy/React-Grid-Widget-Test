import { useState } from "react"
import { Button, FormControl, InputGroup, Table } from "react-bootstrap"
import { BsFillTrashFill } from "react-icons/bs"
import { useDistanceMatrixContext } from "../../../contexts/DistanceMatrixContext"
import useDebounce from "../../../hooks/useDebounce"

export default function LocationTable() {
    const { locations, addLocation, removeLocation, matrixData, error, loading } = useDistanceMatrixContext()
    const [inputValue, setInputValue] = useState()

    // Debounce the input value, and do search for location after 0.5s
    useDebounce(() => {
        addLocation(inputValue)
    }, 1500, [inputValue])
    return (
        <>
            <FormControl onChange={event => setInputValue(event.target.value)} />
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Active</th>
                        <th>Location</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Link</th>
                        <td>~</td>
                    </tr>
                </thead>
                <tbody>
                    {locations?.map((o, i) => <tr key={'locationRowKey-' + i + '-' + o.location.lat + '-' + o.location.lng}>
                        <td><input className="form-check-input" type="checkbox" /></td>
                        <td>{o.address}</td>
                        <td>{o.location.lat}</td>
                        <td>{o.location.lng}</td>
                        <td><a href={`https://www.google.com/maps?q=${o.location.lat},${o.location.lng}`}>Link</a></td>
                        <td><Button><BsFillTrashFill /></Button></td>
                    </tr>)}
                </tbody>
            </Table>
        </>
    )
}
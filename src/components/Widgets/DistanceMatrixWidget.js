import { Table } from "react-bootstrap"
import { useDistanceMatrixContext, DistanceMatrixProvider } from "../../contexts/DistanceMatrixContext"

export default function DistanceMatrixWidget() {
    const { locations, addLocation, removeLocation, matrixData, error, loading } = useDistanceMatrixContext()

    return (
        <DistanceMatrixProvider>
            123
            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {locations.map(o => <tr>
                        <td>{o.place}</td>
                        <td>{o.geo.lat}</td>
                        <td>{o.geo.lng}</td>
                        <td><a href={`https://www.google.com/maps?q=${o.geo.lat},${o.geo.lng}`}></a></td>
                    </tr>)}
                </tbody>
            </Table> */}
        </DistanceMatrixProvider>
    )
}
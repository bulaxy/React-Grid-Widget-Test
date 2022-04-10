import { useState } from "react"
import { FormControl, InputGroup, Table } from "react-bootstrap"
import { useDistanceMatrixContext } from "../../../contexts/DistanceMatrixContext"
import { mapToKey } from "../../../utils/general"
import { calMedian } from "../../../utils/statsHelpers"

export default function MatrixTable({ type }) {
    const { locations, matrixData, medianInfo } = useDistanceMatrixContext()
    return (
        <>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th />
                        {locations?.map((location, i) => <th key={`matrixTableHeaderKey-${i}-${location.location.lat}-${location.location.lng}`}>{location.address}</th>)}
                        <th>Total {type}</th>
                    </tr>
                </thead>
                <tbody>
                    {locations?.map((location, i) =>
                        <tr key={`matrixTableRowKey${i}-${location.location.lat}-${location.location.lng}`}>
                            <td>{location.address}</td>
                            {matrixData?.[type]?.[i]?.map(value =>
                                <td>
                                    {value}
                                </td>
                            )}
                            <td>{matrixData?.[type]?.[i]?.reduce((a, b) => a + b, 0)}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            Based on Median, the median lat and lng are
            <br />
            Lat:{medianInfo.lat || 'N/A'}
            <br />
            Lng:{medianInfo.lng || 'N/A'}
            <br />
            Closest To ({medianInfo.closest?.address})
        </>
    )
}
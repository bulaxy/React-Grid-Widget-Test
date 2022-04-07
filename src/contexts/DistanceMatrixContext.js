import React, { useContext, useState, useEffect } from "react"
import useDebounce from "../hooks/useDebounce"
import useLocalStorage from "../hooks/useLocalStorage"
import { TRUEWAY_GEOCODE, TRUEWAY_MATRIX } from "../constants/apiConstants"
import { useAxios } from '../hooks/useAxios'
import useUpdateEffect from "../hooks/useUpdateEffect"

const DistanceMatrixContext = React.createContext()

export const useDistanceMatrixContext = () => {
    return useContext(DistanceMatrixContext)
}

export const DistanceMatrixProvider = ({ children, extraParams }) => {
    const [locations, setLocations] = useState([])
    const [matrixData, setMatrixdata] = useState({})
    const [searchLocation, setSearchLocation] = useState()
    const [view, setView] = useState('')

    const { data: geocodeDataResult, error: geoError, loading: geoLoading } = useAxios(TRUEWAY_GEOCODE.url, 'GET', {
        headers: TRUEWAY_GEOCODE.headers,
        params: {
            address: searchLocation,
            language: 'en'
        }
    }, searchLocation)

    const { data: matrixDataResult, error: matrixError, loading: matrixLoading } = useAxios(TRUEWAY_MATRIX.url, 'GET', {
        headers: TRUEWAY_MATRIX.headers,
        params: {
            origins: locations.map(location => location.location.lat + ',' + location.location.lng).join(';'),
            destinations: locations.map(location => location.location.lat + ',' + location.location.lng).join(';')
        }
    }, view?.includes('Matrix'))

    useUpdateEffect(() => {
        if (geocodeDataResult?.data?.results) {
            setLocations(prev => [...prev, ...geocodeDataResult.data.results])
        }
    }, [geocodeDataResult])

    useUpdateEffect(() => {
        if (matrixDataResult?.data) {
            setMatrixdata(matrixDataResult.data)
        }
    }, [matrixDataResult])

    const addLocation = (string) => {
        setSearchLocation(string)
        // useDebounce((string) => {
        //     if (string) {
        //     }
        // }, 1000, string)
    }

    const removeLocation = (index) => {
        setLocations(prev => prev.filter((o, idx) => idx !== index))
    }

    return (
        <DistanceMatrixContext.Provider
            value={{
                locations,
                addLocation,
                removeLocation,
                matrixData,
                // error: geoError || matrixError,
                // loading: geoLoading || matrixLoading,
                view,
                setView,
            }}
        >
            {children}
        </DistanceMatrixContext.Provider>
    )
}
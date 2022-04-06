import React, { useContext, useState } from "react"
import useDebounce from "../hooks/useDebounce"
import useLocalStorage from "../hooks/useLocalStorage"

const c = React.createContext()

export const useReactGridContext = () => {
    return useContext(DistanceMatrixContext)
}

export const DistanceMatrixProvider = ({ children }) => {
    const [locations, setLocations] = useState([])
    const [searchLocation, setSearchLocation] = useState()

    const { data: geocodeData, error: geoError, loading: geoLoading } = useAxios(TRUEWAY_GEOCODE.url, 'GET', {
        ...TRUEWAY_GEOCODE.header,
        params: {
            origins: locations.map(location => location.lat + ',' + location.lng).join(';'),
            destinations: locations.map(location => location.lat + ',' + location.lng).join(';')
        }
    }, searchLocation)

    const { data: matrixData, error: matrixError, loading: matrixLoading } = useAxios(TRUEWAY_GEOCODE.url, 'GET', {
        ...TRUEWAY_GEOCODE.header,
        params: {
            origins: locations.map(location => location.lat + ',' + location.lng).join(';'),
            destinations: locations.map(location => location.lat + ',' + location.lng).join(';')
        }
    }, locations)

    useEffect(() => {
        setLocations(prev => [...prev, geocodeData])
    }, [geocodeData])

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
                error:geoError||matrixError,
                loading:geoLoading||matrixLoading
            }}
        >
            {children}
        </DistanceMatrixContext.Provider>
    )
}
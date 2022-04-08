import React, { useContext, useState, useEffect } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import { TRUEWAY_GEOCODE, TRUEWAY_MATRIX } from "../constants/apiConstants"
import { useAxios } from '../hooks/useAxios'
import useUpdateEffect from "../hooks/useUpdateEffect"
import { v4 as uuid } from 'uuid';

const DistanceMatrixContext = React.createContext()

export const useDistanceMatrixContext = () => {
    return useContext(DistanceMatrixContext)
}

const getDistance = (lat1, lng1, lat2, lng2) => {
    const lat = lat1 - lat2
    const lng = lng1 - lng2
    return (lat ** 2 + lng ** 2) ** (1 / 2)
}

export const DistanceMatrixProvider = ({ children, extraParams }) => {
    /* Use localstorage to store the location infos. */
    const [locations, setLocations] = useLocalStorage([])
    const [matrixData, setMatrixdata] = useState({})
    const [searchLocation, setSearchLocation] = useState()
    const [view, setView] = useState('')
    const [medianInfo, setMedianInfo] = useState({})

    /* Get Data from API when search location updated */
    const { data: geocodeDataResult, error: geoError, loading: geoLoading } = useAxios(TRUEWAY_GEOCODE.url, 'GET', {
        headers: TRUEWAY_GEOCODE.headers,
        params: {
            address: searchLocation,
            language: 'en'
        }
    }, searchLocation)

    /*
        Dependency being true or false, so switching between the 2 matrix tab shouldnt require a reload, 
        but switching between the table and matrix table will. Might worth considering only reload if locations changes
        and tab switching. 

        When transfering this to server side API call, Also worth considering using redis to check whether 
        the same call have been made in the last 20 minutes, and use the same result. 
        But only use if called within 20 minutes since traffic informations might update. 
    */

    const { data: matrixDataResult, error: matrixError, loading: matrixLoading } = useAxios(TRUEWAY_MATRIX.url, 'GET', {
        headers: TRUEWAY_MATRIX.headers,
        params: {
            origins: locations.map(location => location.location.lat + ',' + location.location.lng).join(';'),
            destinations: locations.map(location => location.location.lat + ',' + location.location.lng).join(';')
        }
    }, [view?.includes('Matrix')])

    useUpdateEffect(() => {
        if (geocodeDataResult?.data?.results) {
            // if no result,  dont update, otherwise store the data and assign uuid to it. 
            setLocations(prev => [...prev, ...geocodeDataResult.data.results.map(o => ({ ...o, uuid: uuid() }))])
        }
    }, [geocodeDataResult,])

    useUpdateEffect(() => {
        if (matrixDataResult?.data) {
            setMatrixdata(matrixDataResult.data)
        }
    }, [matrixDataResult])

    useUpdateEffect(() => {
        setMedianInfo(prev => {
            return {
                ...prev,
                lat: calMedian(locations.map(location => location.location.lat)),
                lng: calMedian(locations.map(location => location.location.lng)),
                closest: getDistance()
            }
        })
    }, [locations])

    const removeLocation = (index) => {
        setLocations(prev => prev.filter((o, idx) => idx !== index))
    }

    return (
        <DistanceMatrixContext.Provider
            value={{
                locations,
                addLocation: setSearchLocation,
                removeLocation,
                matrixData,
                error: geoError || matrixError,
                loading: geoLoading || matrixLoading,
                view,
                setView,
            }}
        >
            {children}
        </DistanceMatrixContext.Provider>
    )
}
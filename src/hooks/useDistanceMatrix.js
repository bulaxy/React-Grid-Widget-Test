import useAsync from "../useAsync"
import axios from 'axios'
import { useAxios } from "./useAxios";
import { TRUEWAY_MATRIX } from '~/constants/apiConstants.js'

export const useDistanceMatrix = (locations) => {
  const { data, error, loading } = useAxios(TRUEWAY_MATRIX.url, 'GET', {
    ...TRUEWAY_MATRIX.header,
    params: {
      origins: locations.map(location => location.lat + ',' + location.lng).join(';'),
      destinations: locations.map(location => location.lat + ',' + location.lng).join(';')
    }
  }, locations)
  return { data, error, loading };
};
import { useState } from "react"
import axios from 'axios'
import useUpdateEffect from "./useUpdateEffect";

export const useAxios = (url, method, payload, dependency) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useUpdateEffect(() => {
    axios
      .get(url, payload)
      .then(response => setData(response.data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(true));
  }, [dependency]);
  return { data, error, loading };
};
import useAsync from "../useAsync"
import axios from 'axios'

export const useAxios = (url,method, payload,dependency) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(url, payload)
      .then(response => setData(response.data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(true));
  }, [dependency]);
  return { data, error, loading };
};
import {useState, useEffect} from 'react';

function useFetchedData(fetchFunc) {
  const [isLoading, setLoadingState] = useState(true);
  const [hasError, setErrorState] = useState(false);
  const [data, setData] = useState({});

  useEffect(function() {
    async function fetchOnce() {
      try {
        const data = await fetchFunc();
        setData(data);
      }
      catch(err) {
        setErrorState(true);
      }
      finally {
        setLoadingState(false);
      }
    }

    fetchOnce();
  }
  , [fetchFunc]);

  return [data, isLoading, hasError];
}

export default useFetchedData

import { useState, useEffect, useRef } from "react";

const cache = new Map ();

export function useFetchData(fetchFunction, dependencies = [], options = {}) {
 
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(!initialData); 
  const abortControllerRef = useRef(null);

  const { cacheTime = 10 * 60 * 1000, initialData = null } = options;
  const cacheKey = JSON.stringify(fetchFunction.toString() + JSON.stringify(dependencies));

  useEffect(() => {
     let isMounted = true;

     async function load() {
      setError(null);

      const cachedData = cache.get(cacheKey);
      const now = Date.now();

      if (cachedData && now - cachedData.timestamp < cacheTime) {
        setData(cachedData.data);
        setLoading(false);
        revalidate();
        return;
      }
      await revalidate();
     }

     async function revalidate() {
      setLoading(true);
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();
      
     try {
      const result = await fetchFunction();
      if (!isMounted) return 
      cache.set(cacheKey, {
        data: result,
        timestamp: Date.now(),
      })
      setData(result);
     } catch (err) {
      if (err.name === "AbortError") return;
      if (isMounted) setError(err);
     } finally {
      if (isMounted) setLoading(false);
     }
    }
    
     load();

     return() => { 
      isMounted = false;
      if(abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
     };
  }, deps);
  return { data, loading, error}
}
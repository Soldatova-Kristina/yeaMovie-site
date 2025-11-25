import { useState, useEffect } from 'react';

export function useFetchData(fetchFunction, dependencies, options = {}) {
  const { skip = false, initialData = null } = options;
  
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(!skip); 

  useEffect(() => {
    if (skip) {
      setLoading(false);
      setData(initialData);
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        
        const result = await fetchFunction();
        
        if (!cancelled) {
          setData(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, dependencies);

  return { data, loading, error };
}
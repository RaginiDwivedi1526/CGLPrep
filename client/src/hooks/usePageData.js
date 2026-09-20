import { useState, useEffect } from 'react';

const usePageData = (pageId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/page-data/${pageId}`);
        const result = await response.json();
        
        if (result.success) {
          setData(result.data);
        } else {
          setError(result.message);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageId]);

  return { data, loading, error };
};

export default usePageData;

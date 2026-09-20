import { useState, useEffect, useCallback } from 'react';

const API_BASE = 'http://localhost:5000/api/ai';

export function useCurrentAffairs(type = 'daily', options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const today = new Date().toISOString().split('T')[0];

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let url, result;
      
      if (type === 'daily') {
        url = `${API_BASE}/daily-update?date=${options.date || today}`;
        const res = await fetch(url);
        result = await res.json();
        if (result.success) setData(result.data);

      } else if (type === 'news') {
        const res = await fetch(`${API_BASE}/generate-news`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ date: options.date || today, category: options.category })
        });
        result = await res.json();
        if (result.success) setData(result.data);

      } else if (type === 'category') {
        url = `${API_BASE}/news-by-category?category=${encodeURIComponent(options.category)}&date=${options.date || today}`;
        const res = await fetch(url);
        result = await res.json();
        if (result.success) setData(result.data);

      } else if (type === 'monthly') {
        url = `${API_BASE}/monthly-summary?month=${encodeURIComponent(options.month || '')}`;
        const res = await fetch(url);
        result = await res.json();
        if (result.success) setData(result.data);

      } else if (type === 'weekly') {
        url = `${API_BASE}/weekly-digest`;
        const res = await fetch(url);
        result = await res.json();
        if (result.success) setData(result.data);
      }

      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      console.error('useCurrentAffairs fetch error:', err);
      setError('Failed to load content. Please check if the server is running.');
    } finally {
      setLoading(false);
    }
  }, [type, options.category, options.date, options.month]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, lastUpdated, refetch: fetchData };
}

export default useCurrentAffairs;

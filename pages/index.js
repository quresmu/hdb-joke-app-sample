import { useState } from 'react';

export default function Home() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    const res = await fetch('/api/joke');
    const data = await res.json();
    setJoke(data.joke);
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: 80 }}>
      <h1>Welcome 🎉</h1>
      <button
        onClick={fetchJoke}
        style={{ padding: '10px 20px', fontSize: '1rem' }}
        disabled={loading}
      >
        {loading ? 'Loading…' : 'Get a joke'}
      </button>
      {joke && <p style={{ marginTop: 20, maxWidth: 600, margin: '20px auto' }}>{joke}</p>}
    </div>
  );
}

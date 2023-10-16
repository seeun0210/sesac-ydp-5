import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const [mode, setMode] = useSearchParams();
  return (
    <div className={['Home', mode.get('mode')].join(' ')}>
      <h1>HOME</h1>
      <button onClick={() => setMode({ mode: 'Dark' })}>DarkMode</button>
    </div>
  );
}

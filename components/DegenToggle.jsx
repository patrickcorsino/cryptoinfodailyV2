'use client';
import { useState, useEffect } from 'react';

export default function DegenToggle() {
  const [degen, setDegen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('bg-black', !degen);
    document.body.classList.toggle('bg-green-950', degen);
  }, [degen]);

  return (
    <button
      onClick={() => setDegen(!degen)}
      className="p-2 px-4 rounded-full bg-degen text-black font-bold hover:scale-105 duration-200"
    >
      {degen ? 'DEGEN MODE ON' : 'DEGEN MODE OFF'}
    </button>
  );
}

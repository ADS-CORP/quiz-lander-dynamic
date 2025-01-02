'use client';

import { useState, useEffect } from 'react';

export default function TrafficCounter({ brand }) {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Set initial count between 15-30
    setCount(Math.floor(Math.random() * (30 - 15 + 1) + 15));

    // Increment count every 5-15 seconds
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 99) return prevCount;
        return prevCount + 1;
      });
    }, Math.random() * (15000 - 5000) + 5000);

    return () => clearInterval(interval);
  }, []);

  if (!count) return null;

  const bgColor = brand?.theme?.trafficCounterBackground || 'bg-gray-50';
  const textColor = brand?.theme?.trafficCounterText || 'text-gray-900';

  return (
    <div className={`sticky top-0 w-full py-2 text-center ${bgColor} ${textColor} z-[200]`}>
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <p className="text-sm">
          <span className="font-semibold">{count}</span> people are viewing this page
        </p>
      </div>
    </div>
  );
}

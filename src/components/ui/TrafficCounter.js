'use client';

import { useState, useEffect } from 'react';

export default function TrafficCounter({ brand }) {
  // Initialize with a fixed value to prevent hydration mismatch
  const [count, setCount] = useState(20);

  useEffect(() => {
    // Set random count only on client side after mount
    const newCount = Math.floor(Math.random() * (30 - 15 + 1) + 15);
    setCount(newCount);

    // Increment count every 5-15 seconds
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 99) return prevCount;
        return prevCount + 1;
      });
    }, Math.random() * (15000 - 5000) + 5000);

    return () => clearInterval(interval);
  }, []);

  // Always render to prevent layout shift
  // if (!count) return null;

  // Use style attribute for colors since the theme might be returning hex values
  const bgColor = brand?.theme?.trafficCounterBackground || '#f9fafb';
  const textColor = '#000000'; // Always use black text

  return (
    <div className="sticky top-0 w-full py-2 text-center font-normal z-[200]" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <p className="text-sm" style={{ fontWeight: 400, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <span style={{ fontWeight: 700 }}>{count}</span> people are viewing this page
        </p>
      </div>
    </div>
  );
}

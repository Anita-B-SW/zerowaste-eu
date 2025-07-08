import React from 'react';

export default function App() {
  return (
    <div>
      <h1>Zero Waste Testing Project by AB</h1>
      <button onClick={() => window.dataLayer?.push({ event: 'Test Button Clicked' })}>
        Click Me Please
      </button>
    </div>
  );
}

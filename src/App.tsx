import React from 'react';
import { useState } from 'react';
import Popup from './Popup';

export default function Home() {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="home">
      <header className="hero" style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to ZeroWaste EU</h1>
        <p>Empowering sustainability in everyday life.</p>
        <button onClick={handleButtonClick}>Learn More</button>
      </header>

      <main>
        <section style={{ padding: '100vh 1rem', background: '#f7f7f7' }}>
          <h2>Why Zero Waste?</h2>
          <p>Zero waste is more than recycling — it's about rethinking our systems and designing waste out of our lives.</p>
        </section>

        <section style={{ padding: '100vh 1rem', background: '#e0ffe0' }}>
          <h2>Workshops & Resources</h2>
          <p>Join our workshops or download our free guides to start your zero waste journey today.</p>
        </section>

        <section style={{ padding: '100vh 1rem', background: '#fff0f0' }}>
          <h2>Community Impact</h2>
          <p>We believe change comes from the ground up — connect with others who care about sustainability.</p>
        </section>
      </main>

      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
}


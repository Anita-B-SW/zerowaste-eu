import React from 'react';
import { useState } from 'react';
import Popup from './Popup';
import './index.css';

export default function Home() {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="home">
      <header className="hero" style={{ padding: '4rem 1rem', background: '#90EE90' }}>
        <h1 >Welcome to ZeroWaste EU</h1>
        <h2 style={{ padding: '1rem 1rem'}}></h2>
        <h2>Empowering sustainability in everyday life.</h2>
        <button className="subscribe-button" style={{background:'lightblue', padding: '1rem 1rem', borderRadius: '6px', fontSize: '1rem'}} onClick={handleButtonClick}>SUBSCRIBE</button>
      </header>

      <main>
        <section style={{ padding: '4rem 1rem', background: '#f7f7f7' }}>
          <h2>Why Zero Waste?</h2>
          <p>Zero waste is more than recycling — it's about rethinking our systems...</p>
          <p>Click <a href="https://zerowasteeurope.eu/">HERE</a> to visit a better website.</p>

          <button className="cta-button" onClick={handleButtonClick}>Learn More</button>
        </section>

        <section style={{ padding: '4rem 1rem', background: '#e0ffe0' }}>
          <h2>Workshops & Resources</h2>
          <p>Join our workshops or download our guides...</p>
          <button className="cta-button" onClick={handleButtonClick}>Learn More</button>

        </section>

        <section style={{ padding: '4rem 1rem', background: '#fff0f0' }}>
          <h2>Community Impact</h2>
          <p>Change comes from the ground up — connect with others who care...</p>
          <button className="cta-button" onClick={handleButtonClick}>Learn More</button>
        </section>

        <section style={{ padding: '4rem 1rem', background: '#f7f7f7' }}>
          <h2>Why Zero Waste?</h2>
          <p>Zero waste is more than recycling — it's about rethinking our systems...</p>
          <button className="cta-button" onClick={handleButtonClick}>Learn More</button>
        </section>

        <section style={{ padding: '4rem 1rem', background: '#e0ffe0' }}>
          <h2>Workshops & Resources</h2>
          <p>Join our workshops or download our guides...</p>
          <button className="cta-button" onClick={handleButtonClick}>Learn More</button>
        </section>

        <section style={{ padding: '4rem 1rem', background: '#fff0f0' }}>
          <h2>Community Impact</h2>
          <p>Change comes from the ground up — connect with others who care...</p>
          <p>Click <a href="https://zerowasteeurope.eu/">HERE</a> to visit a better website.</p>

          <button className="cta-button" onClick={handleButtonClick}>Learn More</button>
        </section>
      </main>


      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
}


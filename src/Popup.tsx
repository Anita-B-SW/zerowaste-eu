import { useState, ChangeEvent, FormEvent } from 'react';

interface PopupProps {
  onClose: () => void;
}

export default function Popup({ onClose }: PopupProps) {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
    // TODO: connect to a real form handler or backend service
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div style={popupOverlay}>
      <div style={popupBox}>
        <h3>Stay in the Loop</h3>
        {!submitted ? (
          <>
            <p>Sign up to get updates about new workshops, resources, and community events.</p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                style={inputStyle}
              />
              <button type="submit" style={buttonStyle}>Subscribe</button>
            </form>
          </>
        ) : (
          <p>Thank you for subscribing!</p>
        )}
        <button onClick={onClose} style={{ marginTop: '1rem' }}>Close</button>
      </div>
    </div>
  );
}

const popupOverlay: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999,
};

const popupBox: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  maxWidth: '400px',
  boxShadow: '0 0 15px rgba(0,0,0,0.3)',
  textAlign: 'center',
};

const inputStyle: React.CSSProperties = {
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle: React.CSSProperties = {
  padding: '0.6rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#228b22',
  color: '#fff',
  cursor: 'pointer',
};

import React from 'react';

function MyComponent() {
  return (
    <div style={{ position: 'relative', maxWidth: '100%' }}>
      <img
        src="https://ryansechrest.com/content/images/2022/08/nodes.gif"
        alt="My GIF"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        width: '80%',
        maxWidth: '400px'
      }}>
        <h1 style={{ color: 'red', fontSize: '24px', margin: '0', marginBottom: '10px' }}>Welcome to Learning Website!</h1>
        <p style={{ color: 'white', fontSize: '18px', margin: '0' }}>This website is dedicated to helping you learn HTML, CSS, and JavaScript.</p>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          /* Apply styles for laptops and computers */
          img {
            max-height: 450px;
          }
        }
      `}</style>
    </div>
  );
}

export default MyComponent;

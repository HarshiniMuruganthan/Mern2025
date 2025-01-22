import { useRef } from 'react';

const UseRefExample = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>useRef Hook Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button"
        style={{ padding: '10px', fontSize: '16px', marginBottom: '10px', width: '80%' }}
      />
      <br />
      <button
        onClick={handleFocus}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Focus Input
      </button>
    </div>
  );
};

export default UseRefExample;

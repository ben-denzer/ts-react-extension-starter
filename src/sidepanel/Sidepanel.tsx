import { useState } from 'react';
import './Sidepanel.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/popup/Popup.tsx</code> and save to test
        </p>
      </div>
    </>
  );
}

export default App;

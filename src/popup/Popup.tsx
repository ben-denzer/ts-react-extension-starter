import { useState } from 'react';
import './Popup.css';

function App() {
  const [count, setCount] = useState(0);

  const openSidePanel = async () => {
    const currentWindow = await chrome.windows.getCurrent({});
    if (currentWindow?.id) {
      await chrome.sidePanel.open({ windowId: currentWindow.id });
      // close this popup
      window.close();
    } else {
      console.error('No current window');
    }
  };

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
      <div className="card">
        <button onClick={openSidePanel}>Open Side Panel</button>
      </div>
    </>
  );
}

export default App;

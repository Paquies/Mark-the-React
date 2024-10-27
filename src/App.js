import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from '../src/pages/Home.tsx';

function App() {
  return (
    <div>
        <Home />
    </div>
  );
}
export default App;

// const root = createRoot(document.getElementById('root'));
// createRoot(root).render(<App />);   // This is the new way to render in React 18
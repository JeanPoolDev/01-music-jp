import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MusicApp } from './MusicApp.jsx'
import { BrowserRouter } from 'react-router'
import { MusicProvider } from './context/ContextMusic.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MusicProvider>
      <BrowserRouter>
        <MusicApp />
      </BrowserRouter>
    </MusicProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MusicApp } from './MusicApp.jsx'

import './index.css'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MusicApp />
    </BrowserRouter>
  </StrictMode>,
)

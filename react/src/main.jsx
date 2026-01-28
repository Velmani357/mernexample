import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* it runs the life cycle of react once if any error found through to console log but still output can be displayed=>strictMode */}
    <BrowserRouter>
    
    <App />
    </BrowserRouter>
  </StrictMode>,
)

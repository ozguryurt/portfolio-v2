import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router"
import App from './App'

createRoot(document.getElementById('ozguryurtdev')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

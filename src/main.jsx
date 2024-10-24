import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltrosProvider } from './contextos/filtrosContext.jsx'

createRoot(document.getElementById('root')).render(
  <FiltrosProvider>
    <App />
  </FiltrosProvider>,
)

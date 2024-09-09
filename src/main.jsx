import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TarefasProvider } from './context/TarefasContext.jsx'
import { ContatosProvider } from './context/ContatosContext.jsx';
import { Global } from './Global.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TarefasProvider>
      <ContatosProvider>
        <Global />
        <App />
      </ContatosProvider>
    </TarefasProvider>
  </StrictMode>,
)

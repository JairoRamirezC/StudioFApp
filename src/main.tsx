import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/Variables.scss'
import PageStudioF from './pages/PageStudioF'
import AppContextProvider from './common/context/AppContextProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider >
      <PageStudioF />
    </AppContextProvider>
  </StrictMode>,
)

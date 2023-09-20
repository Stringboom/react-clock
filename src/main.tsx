import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppContext from './AppContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContext />
  </React.StrictMode>,
)

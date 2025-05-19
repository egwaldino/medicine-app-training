
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import React from "react"
import { Provider } from "@/components/chakraUi/provider.tsx"

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)

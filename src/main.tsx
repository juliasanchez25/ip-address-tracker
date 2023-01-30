import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

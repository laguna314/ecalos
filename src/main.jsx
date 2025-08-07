import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Donate from './pages/Donate.jsx'
import DonateMonthly from './pages/DonateMonthly.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/donate', element: <Donate /> },
  { path: '/donate/monthly', element: <DonateMonthly /> },
])

const root = document.getElementById('root')
createRoot(root).render(<RouterProvider router={router} />)

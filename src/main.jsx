import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Books from './pages/Books/Books'
import BooksDetail from './pages/BooksDetail/BooksDetail'
import Quote from './pages/Qoute/Quote'
import Home from './pages/Home/Home'

import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <App/> ,
  children: [
    {path: '/', element: <Home/>},
    {path: '/books', element: <Books/>},
    {path: '/booksDetail/:id', element: <BooksDetail/>},
    {path: '/quote', element: <Quote/>}
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)

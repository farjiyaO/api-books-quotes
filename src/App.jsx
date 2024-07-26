import { useState } from 'react'
import { Outlet, } from'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {

  return (
    <div className="container">
      <div className="menu">
      <Navbar />
      </div>
      

      <div className='content'>
      <Outlet />
      </div> 
    </div>
  )
}

export default App

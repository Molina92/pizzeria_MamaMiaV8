import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
// import { Register } from './Components/Register'
// import { Login } from './Components/Login'

function App() {
  return (
    <>
      <div className='min-vh-100 bg-dark'>
      <Navbar />
      <Home />
      {/* <Login /> */}
      {/* <Register /> */}
      <Footer />
      </div>
    </>
  )
}

export default App

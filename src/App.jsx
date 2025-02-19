import React from 'react'
import Navbar from './component/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Login></Login>
      <Register></Register>
      <Home></Home>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App

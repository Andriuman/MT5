import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Footer } from './components/Footer'
import { LoginPage } from './pages/LoginPage'
import { Home } from './pages/Home'
import Header from './components/Header'


function App() {

  return (
    <BrowserRouter>

   
      <div className='flex flex-col min-h-screen text-white bg-zinc-950'>
        <Header/>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home/" element={<Home/>} />
            <Route path="/login/" element={<LoginPage />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>)
}

export default App

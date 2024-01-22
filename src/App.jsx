import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Footer } from './components/Footer'
import { LoginPage } from './pages/LoginPage'
import Header from './components/Header'


function App() {

  return (
    <BrowserRouter>

   
      <div className='flex flex-col min-h-screen text-white bg-black'>
        <Header/>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login/" element={<LoginPage />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>)
}

export default App

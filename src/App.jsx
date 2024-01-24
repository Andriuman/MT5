import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Footer } from './components/Footer'
import { LoginPage } from './pages/LoginPage'
import { CheckerPage } from './pages/CheckerPage'
import { Home } from './pages/Home'
import Header from './components/Header'
import { Withdraw } from './pages/Withdraw'
import { Payment } from './pages/Payment'
import { Transfer } from './pages/Transfer'
import { Fiat } from './pages/Fiat'

function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen text-white bg-zinc-950">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home/" element={<Home />} />
            <Route path="/login/" element={<LoginPage />} />
            <Route path="/depositar/" element={<CheckerPage />} />
            <Route path="/retirar/" element={<Withdraw />} />
            <Route path="/pagos/" element={<Payment />} />
            <Route path="/transferencia/" element={<Transfer />} />
            <Route path="/fiat/" element={<Fiat />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App

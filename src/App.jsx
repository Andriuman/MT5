import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Footer } from './components/Footer'
import { LoginPage } from './pages/LoginPage'
import { CheckerPage } from './pages/CheckerPage'
import { Home } from './pages/Home'
import Header from './components/Header'
import { Settings } from './pages/Settings'
import { Settings2 } from './pages/Settings2'
import { Settings3 } from './pages/Settings3'
import { Tickets } from './pages/Tickets'
import { Settings4 } from './pages/Settings4'
import { Informes } from './pages/Informes'
import { Informes2 } from './pages/Informes2'
import { Informes3 } from './pages/Informes3'



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
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login/" element={<LoginPage />} />
            <Route path="/configuracion/" element={<Settings />} />
            <Route path="/identidad/" element={<Settings2/>} />
            <Route path="/domicilio/" element={<Settings3/>} />
            <Route path="/tickets/" element={<Tickets/>} />
            <Route path="/datosPersonales/" element={<Settings4/>}/>
            <Route path="/posiciones/" element={<Informes/>}/>
            <Route path="/tabla/" element={<Informes2/>}/>
            <Route path="/extractos/" element={<Informes3/>}/>
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

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faMoneyBillWave, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Acordeon from './Acordeon';
import Dropdown from './Dropdown';
import { Link } from "react-router-dom";
import casa from "../assets/casa.png"
import informes from "../assets/informes.png"
import Cajero from "../assets/atm.png"
import logo from "../assets/mtg.png"
import tether from "../assets/tether.svg"



const Header = () => {
  return (
    <div className="bg-zinc-950 text-white">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo y selección de mercado */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-11 mr-3" />
          <span className="ml-3 text-xl text-white">Deriv MT5</span>
          <select className="bg-zinc-950 text-white ml-2">
            <option>100740648721</option>
            <option>100596114563</option>
            <option>102435563241</option>
          </select>
        </div>
        {/* Enlaces de navegación */}
        <div className="hidden md:flex items-center space-x-4">
          <img className="w-4 h-4 " src={casa} alt="" />
          <a href="/" className="hover:text-gray-300">Trader's Hub</a>
          <img className="w-4 h-4 " src={informes} alt="" />
          <a href="/posiciones" className="hover:text-gray-300">Informes</a>
          <img className="w-4 h-4 " src={Cajero} alt="" />
          <a href="/depositar" className="hover:text-gray-300">Cajero</a>
        </div>


        <div className="flex items-center">
          <FontAwesomeIcon icon={faBell} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          <Link to="/datosPersonales">
            <FontAwesomeIcon icon={faUser} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          </Link>







          <div className="flex items-center text-magenta  rounded px-2 py-1">
          <img src={tether} alt="Descripción" className="h-8 w-8 mr-1" />
            <Dropdown />
          </div>




          <button className="ml-3 bg-custom-red hover:bg-blue-700 text-white py-1 px-3 rounded">
            Depositar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

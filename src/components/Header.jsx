import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faMoneyBillWave, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Acordeon from './Acordeon';
import Dropdown from './Dropdown';





const Header = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo y selección de mercado */}
        <div className="flex items-center">
          <img src="src/images/mtg.png" alt="Logo" className="h-11 mr-3" />
          <span className="ml-3 text-xl text-white">Deriv MT5</span>
          <select className="bg-black text-white">
            <option>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faBell} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
                
              </div>
            </option>
            <option></option>
            <option>Opcion2</option>
            <option>Opcion2</option>
            // Agregar más opciones aquí
          </select>
        </div>

        






        {/* Enlaces de navegación */}
        <div className="hidden md:flex items-left space-x-4">
          <FontAwesomeIcon icon={faBell} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          <a href="#" className="hover:text-gray-300">Trader's Hub</a>
          <FontAwesomeIcon icon={faBell} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          <a href="#" className="hover:text-gray-300">Informes</a>
          <FontAwesomeIcon icon={faBell} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          <a href="#" className="hover:text-gray-300">Cajero</a>
        </div>


        <div className="flex items-center">
          <FontAwesomeIcon icon={faBell} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          <FontAwesomeIcon icon={faUser} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          



          

          <div className="flex items-center text-magenta  rounded px-2 py-1">
            <FontAwesomeIcon icon={faMoneyBillWave} className="h-3 w-3 text-white mr-1" />
            <Dropdown/>
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

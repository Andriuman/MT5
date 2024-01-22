import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { FaWhatsapp } from 'react-icons/fa';
import Iconos from './Acordeon';


export function Footer() {
  // Estado para almacenar la fecha y hora actual
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Configura un intervalo para actualizar la fecha y hora cada segundo
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Limpieza del intervalo al desmontar el componente
    return () => {
      clearInterval(timerId);
    };
  }, []);

  // Función de ayuda para agregar un cero a la izquierda si el número es menor que 10
  const padTo2Digits = (num) => num.toString().padStart(2, '0');

  // Construye la fecha y la hora en el formato deseado
  const formattedDate = [
    padTo2Digits(currentDateTime.getUTCDate()),
    padTo2Digits(currentDateTime.getUTCMonth() + 1), // getUTCMonth() devuelve un índice 0 para enero, 1 para febrero, etc.
    currentDateTime.getUTCFullYear(),
  ].join('-') + ' ' + [
    padTo2Digits(currentDateTime.getUTCHours()),
    padTo2Digits(currentDateTime.getUTCMinutes()),
    padTo2Digits(currentDateTime.getUTCSeconds()),
  ].join(':') + ' GMT';

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-right">
          {/* Aquí puede ir el logotipo o cualquier otro contenido que desees en la izquierda */}
        </div>
        <div className="flex items-center">
          <div className="text-center md:text-start text-white mr-3">
            {formattedDate}
          </div>
          
          <FaWhatsapp className="text-green-500 h-9 w-9 p-2" />
          <FontAwesomeIcon icon={faUser} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          
          <FontAwesomeIcon icon={faBell} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          <FontAwesomeIcon icon={faBell} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          <FontAwesomeIcon icon={faBell} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          <FontAwesomeIcon icon={faBell} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          <FontAwesomeIcon icon={faBell} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          <FontAwesomeIcon icon={faBell} className="h-4 w-4 mr-3 hover:text-gray-300 cursor-pointer" />
          
          {/* Agregar más enlaces según sea necesario */}
        </div>
      </div>
    </footer>
  );
}



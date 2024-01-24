import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartBar, faCheckCircle, faShieldAlt, faChevronDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Accordion = () => {
  const [isOpenPerfil, setIsOpenPerfil] = useState(false);
  const [isOpenEvaluaciones, setIsOpenEvaluaciones] = useState(false);
  const [isOpenVerificacion, setIsOpenVerificacion] = useState(false);
  const [isOpenSeguridad, setIsOpenSeguridad] = useState(false);
  const [selectedButton, setSelectedButton] = useState({});

  const toggleSection = (section) => {
    if (section === 'perfil') setIsOpenPerfil(!isOpenPerfil);
    if (section === 'evaluaciones') setIsOpenEvaluaciones(!isOpenEvaluaciones);
    if (section === 'verificacion') setIsOpenVerificacion(!isOpenVerificacion);
    if (section === 'seguridad') setIsOpenSeguridad(!isOpenSeguridad);
  };

  const handleButtonClick = (section, buttonName) => {
    setSelectedButton({
      section: selectedButton.section === section && selectedButton.button === buttonName ? '' : section,
      button: selectedButton.button === buttonName ? '' : buttonName,
    });
  };

  return (
    <div className="bg-[#151717] text-gray-300 w-full rounded-2xl divide-y divide-gray-700 text-left shadow-lg">
      {/* Sección de Perfil */}
      <div>
        <button
          className="flex items-center justify-between w-full text-left px-4 py-3 focus:outline-none"
          onClick={() => toggleSection('perfil')}
        >
          <FontAwesomeIcon icon={faUser} className="h-5 w-5" />
          <span className="flex-grow px-3">Perfil</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`h-4 w-4 transform ${isOpenPerfil ? 'rotate-180' : ''} transition-transform`}
          />
        </button>
        <Transition
          show={isOpenPerfil}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="px-4 pt-4 pb-2 space-y-2">
            <Link to="/datosPersonales"
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'perfil' && selectedButton.button === 'datosPersonales' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717]'}`}
              onClick={() => handleButtonClick('perfil', 'datosPersonales')}
            >
              Datos personales
            </Link>

            <button
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'perfil' && selectedButton.button === 'idiomas' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717]'}`}
              onClick={() => handleButtonClick('perfil', 'idiomas')}
            >
              Idiomas
            </button>

          </div>
        </Transition>
      </div>

      {/* Sección de Evaluaciones */}
      <div>
        <button
          className="flex items-center justify-between w-full text-left px-4 py-3 focus:outline-none"
          onClick={() => toggleSection('evaluaciones')}
        >
          <FontAwesomeIcon icon={faChartBar} className="h-5 w-5" />
          <span className="flex-grow px-3">Evaluaciones</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`h-4 w-4 transform ${isOpenEvaluaciones ? 'rotate-180' : ''} transition-transform`}
          />
        </button>
        <Transition
          show={isOpenEvaluaciones}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className=" flex flex-col px-4 pt-4 pb-2 space-y-2">
            <Link to="/configuracion"
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'evaluaciones' && selectedButton.button === 'evaluacionTrading' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('evaluaciones', 'evaluacionTrading')}
            >
              Evaluación de trading
            </Link>

            <button
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'evaluaciones' && selectedButton.button === 'evaluacionFinanciera' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('evaluaciones', 'evaluacionFinanciera')}
            >
              Evaluación financiera
            </button>

          </div>
        </Transition>
      </div>

      {/* Sección de Verificación */}
      <div>
        <button
          className="flex items-center justify-between w-full text-left px-4 py-3 focus:outline-none"
          onClick={() => toggleSection('verificacion')}
        >
          <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5" />
          <span className="flex-grow px-3">Verificación</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`h-4 w-4 transform ${isOpenVerificacion ? 'rotate-180' : ''} transition-transform`}
          />
        </button>
        <Transition
          show={isOpenVerificacion}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className=" flex flex-col px-4 pt-4 pb-2 space-y-2">
            <Link to="/identidad"
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'verificacion' && selectedButton.button === 'pruebaIdentidad' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('verificacion', 'pruebaIdentidad')}
            >
              Prueba de identidad
            </Link>

            <Link to="/domicilio"
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'verificacion' && selectedButton.button === 'pruebaDomicilio' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('verificacion', 'pruebaDomicilio')}
            >
              Prueba de domicilio
            </Link>



            <button
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'verificacion' && selectedButton.button === 'Prueba de titularidad' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('verificacion', 'Prueba de titularidad')}
            >
              Prueba de titularidad
            </button>

            <button
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'verificacion' && selectedButton.button === 'Prueba de ingresos' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('verificacion', 'Prueba de ingresos')}
            >
              Prueba de ingresos
            </button>

          </div>
        </Transition>
      </div>

      {/* Sección de Seguridad y privacidad */}
      <div>
        <button
          className="flex items-center justify-between w-full text-left px-4 py-3 focus:outline-none"
          onClick={() => setIsOpenSeguridad(!isOpenSeguridad)}
        >
          <FontAwesomeIcon icon={faShieldAlt} className="h-5 w-5" />
          <span className="flex-grow px-3">Seguridad y privacidad</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`h-4 w-4 transform ${isOpenSeguridad ? 'rotate-180' : ''} transition-transform`}
          />
        </button>
        <Transition
          show={isOpenSeguridad}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="px-4 pt-4 pb-2 space-y-2">
            <button
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'seguridad' && selectedButton.button === 'Correo electrónico y contraseñas' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('seguridad', 'Correo electrónico y contraseñas')}
            >
              Correo electrónico y contraseñas
            </button>

            <button
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'seguridad' && selectedButton.button === 'Autoexclusión' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('seguridad', 'Autoexclusión')}
            >
              Autoexclusión
            </button>

            <button
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'seguridad' && selectedButton.button === 'Limites de la cuenta' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('seguridad', 'Limites de la cuenta')}
            >
              Limites de la cuenta
            </button>



            <button
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'seguridad' && selectedButton.button === 'Historial de accesos' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('seguridad', 'Historial de accesos')}
            >
              Historial de accesos
            </button>

            <Link to="/tickets"
              className={` flex w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'seguridad' && selectedButton.button === 'Token Api' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('seguridad', 'Token Api')}
            >
              Support Ticket
            </Link>

            <button
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'seguridad' && selectedButton.button === 'Aplicaciones conectadas' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('seguridad', 'Aplicaciones conectadas')}
            >
              Aplicaciones conectadas
            </button>

            <button
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'seguridad' && selectedButton.button === 'Autenticación de dos factores' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('seguridad', 'Autenticación de dos factores')}
            >
              Autenticación de dos factores
            </button>

            <button
              className={`w-full text-white text-left py-2 px-4 rounded-lg ${selectedButton.section === 'seguridad' && selectedButton.button === 'Cierre su cuenta' ? 'bg-black border-l-4 border-red-500' : 'bg-[#151717] '}`}
              onClick={() => handleButtonClick('seguridad', 'Cierre su cuenta')}
            >
              Cierre su cuenta
            </button>




          </div>
        </Transition>
      </div>

      <div className="mt-4">
        <button
          className="flex items-center justify-center w-full bg-[#151717] text-white py-2 px-4 rounded-lg hover:bg-gray-800"
          onClick={() => {
            // Aquí manejas la acción de salir
          }}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="h-5 w-5" />
          <span className="ml-2">Salir</span>
        </button>
      </div>
    </div>
  );
};

export default Accordion;


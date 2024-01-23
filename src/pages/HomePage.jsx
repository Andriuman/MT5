import React from 'react';
import Acordeon from '../components/Acordeon';
import Formulario1 from '../components/Formulario1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Asegúrate de que este ícono esté importado correctamente

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-black">
      {/* Div modificado para centrar el texto "Configuración" */}
      <div className='flex justify-center items-center h-16 text-2xl bg-black'>Configuración</div>
      
      {/* Contenedor principal que incluye el acordeón y la columna de información */}
      <div className="flex flex-grow overflow-hidden">
        {/* Columna de acordeón a la izquierda */}
        <div className="w-1/4 p-4 flex flex-col bg-black">
          <div className="flex-grow overflow-y-auto">
            <Acordeon />
          </div>
          {/* Botón de Salir */}
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

        {/* Columna de información a la derecha */}
        <div className="w-3/4 p-4 overflow-y-auto bg-black">
          <div className="max-w-3xl mx-auto">
            {/* Título de la sección */}
            <h1 className="text-xl font-semibold mb-4">Detalles</h1>
            {/* Inclusión del Formulario1 */}
            <Formulario1 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
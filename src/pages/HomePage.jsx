import React from 'react';
import Acordeon from '../components/Acordeon';
import Formulario1 from '../components/Formulario1';

export function HomePage() {
  return (
    <div>
      {/* Div modificado para centrar el texto "Configuración" */}
      <div className='text-white bg-zinc-950 flex justify-center items-center h-16 text-2xl'>Configuración</div>
      <div className="flex h-screen text-white bg-zinc-950">
        {/* Columna de acordeón a la izquierda */}
        <div className="w-1/4 bg-zinc-950 text-white p-4 ">
          <Acordeon/>
        </div>

        {/* Columna de información a la derecha */}
        <div className="w-3/4 bg-zinc-950 text-white p-4 overflow-y-auto">
          {/* Contenedor para el contenido de la información */}
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

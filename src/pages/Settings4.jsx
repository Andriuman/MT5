import React from 'react';
import Acordeon from '../components/Acordeon';

export function Settings4() {
  return (
    <div className='flex flex-col w-full'>
      <div className="w-full flex text-2xl font-bold justify-center">Configuración</div>
      <div className="flex flex-row w-full justify-between">
        <div className="w-1/4 bg-zinc-950 text-white p-4">
          <Acordeon />
        </div>
        <div className="flex w-3/4 flex-col pt-20 mb-20">
          <h1 className="font-bold text-l">Detalles</h1>
          <div className="flex flex-row gap-10">
            <div className="">
              <h1 className=" text-xs">Nombres</h1>
              <input type="text" readOnly
                className=" bg-zinc-900 w-60 border border-zinc-700 rounded px-3 py-2 w-full focus:outline-none focus:border-zinc-700 mb-5"
                placeholder='Andres Camilo' />
            </div>
            <div className="">
              <h1 className=" text-xs">Apellidos</h1>
              <input type="text" readOnly
                className=" bg-zinc-900 w-60 border border-zinc-700 rounded px-3 py-2 w-full focus:outline-none focus:border-zinc-700 mb-5"
                placeholder='Salamanca' />
            </div>
          </div>
          <h1 className=" text-xs">Fecha de nacimiento</h1>
          <input type="text" readOnly
            className=" bg-zinc-900 w-60 border border-zinc-700 rounded px-3 py-2 w-full focus:outline-none focus:border-zinc-700 mb-5"
            placeholder='21-08-1991' />
          <h1 className=" text-xs">Nacionalidad</h1>
          <input type="text" readOnly
            className=" bg-zinc-900 w-60 border border-zinc-700 rounded px-3 py-2 w-full focus:outline-none focus:border-zinc-700 mb-5"
            placeholder='Colombia' />
          <h1 className=" text-xs">Numero de telefono</h1>
          <input type="text" readOnly
            className=" bg-zinc-900 w-60 border border-zinc-700 rounded px-3 py-2 w-full focus:outline-none focus:border-zinc-700 mb-5"
            placeholder='+573144796795' />
          <h1 className="font-bold text-l">Dirección</h1>
          <h1 className=" text-xs ">Primera linea de dirección</h1>
          <input type="text" readOnly
            className=" bg-zinc-900 w-60 border border-zinc-700 rounded px-3 py-2 w-full focus:outline-none focus:border-zinc-700 mb-5"
            placeholder='Cra 1053 #130c 09' />
          <h1 className=" text-xs ">Segunda linea dirección(opcional)</h1>
          <input type="text" readOnly
            className=" bg-zinc-900 w-60 border border-zinc-700 rounded px-3 py-2 w-full focus:outline-none focus:border-zinc-700 mb-5"
            placeholder='Cra 1053 #130c 09' />
          <h1 className=" text-xs ">Pueblo/Ciudad</h1>
          <input type="text" readOnly
            className=" bg-zinc-900 w-60 border border-zinc-700 rounded px-3 py-2 w-full focus:outline-none focus:border-zinc-700 mb-5"
            placeholder='Bogotá' />
          <h1 className=" text-xs ">Estado/Provincia(opcional)</h1>
          <input type="text" readOnly
            className=" bg-zinc-900 w-60 border border-zinc-700 rounded px-3 py-2 w-full focus:outline-none focus:border-zinc-700 mb-5"
            placeholder='Distrito capital de Bogotá' />
        </div>
        <div className="flex w-1/4 flex-col pt-20 mb-20"></div>
      </div>
      <div className="flex flex-row fixed bottom-20 right-5 w-100 gap-5 bg-zinc-900 rounded">
        <p className='text-xs p-5'>Asegurese de que la informacion sea correcta o eso puede afectar la experiencia de sus operaciones</p>

        <button className="pl-10 pr-10 bg-red-600">Enviar</button>
      </div>
      
    </div>
  );
}

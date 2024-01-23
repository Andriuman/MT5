import React from 'react';
import Acordeon from '../components/Acordeon';
import Chulo from '../assets/Chulo.png'
import { Link } from 'react-router-dom';

export function Settings2() {
    return (
        <div className='flex flex-col w-full'>
            <div className="w-full flex text-2xl font-bold justify-center">Configuración</div>
            <div className="flex flex-row w-full justify-between">
                <div className="w-1/4 bg-zinc-950 text-white p-4">
                    <Acordeon />
                </div>
                <div className="flex w-2/4 flex-col gap-5 justify-center items-center">
                    <img src={Chulo} alt="identidad" className='h-1/3 pl-5' />
                    <h1 className="font-bold text-xl">
                        Su prueba de identidad está verificada
                    </h1>
                    <h2 className="text-sm text-zinc-400">
                        Para continuar operando, también debe presentar su prueba de domicilio.
                    </h2>
                    <Link to="/domicilio">
                        <button className="bg-red-500 rounded pl-10 pr-10 pt-3 pb-3">
                            Enviar prueba de domicilio
                        </button>
                    </Link>
                </div>
                <div className="flex w-1/4 flex-col"></div>
            </div>
        </div>
    );
}

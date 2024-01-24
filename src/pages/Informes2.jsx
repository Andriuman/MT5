import React from 'react';
import info from '../assets/info.png'
import ico1 from '../assets/ico1.png'
import ico2 from '../assets/ico2.png'
import ico3 from '../assets/ico3.png'

export function Informes2() {
    return (
        <div className='flex flex-col w-full'>
            <div className="w-full flex text-2xl font-bold justify-center">Informes</div>
            <div className="flex flex-row w-screen">
                <div className="w-80 bg-zinc-950 text-white p-4 w-full">
                    <div className="bg-zinc-900 rounded">
                        <div className="h-14 flex justify-start items-center pl-2 gap-10">
                            <img src={ico3} width="20px" height="20px" alt="" />
                            <a href="/posiciones">Posiciones abiertas</a>
                        </div>
                        <div className=" bg-zinc-700 border-l-4 border-red-600 h-14 flex justify-start pl-2 gap-10 items-center">
                            <img src={ico2} width="20px" height="20px" alt="" />
                            <a href="/tabla">Tabla de operaciones</a>
                        </div>
                        <div className="h-14 flex justify-start pl-2 gap-10 items-center">
                            <img src={ico1} width="20px" height="20px" alt="" />
                            <a href="/extractos">Extracto</a>
                        </div>
                    </div>
                </div>
                <div className="pl-40 pt-20 flex w-2/4 flex-col gap-5 justify-center items-center">
                    <img width="200" height="200" src={info} alt="" />
                    <h1 className='text-zinc-600 pr-10 font-bold'>Aun no tienes posiciones abiertas</h1>
                </div>
            </div>
            <div className="fixed top-20 right-20 text-xl"><a href="/">X</a></div>
        </div>
    );
}

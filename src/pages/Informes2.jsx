import React from 'react';
import info from '../assets/info.png'
import ico1 from '../assets/ico1.png'
import ico2 from '../assets/ico2.png'
import ico3 from '../assets/ico3.png'
import Menu from "../components/menuInformes";

export function Informes2() {
    return (
        <div className='flex flex-col w-full'>
            <div className="w-full flex text-2xl font-bold justify-center">Informes</div>
            <div className="flex flex-row w-screen">
                <div className="w-1/4 bg-zinc-950 text-white p-4">
                    <Menu activeOption={"retirar"} />
                </div>
                <div className="pl-20 pt-20 flex w-2/4 flex-col gap-5 justify-center items-center">
                    <img width="200" height="200" src={info} alt="" />
                    <h1 className='text-zinc-600 pr-10 font-bold'>Aun no tienes posiciones abiertas</h1>
                </div>
            </div>
            <div className="fixed top-20 right-20 text-xl"><a href="/">X</a></div>
        </div>
    );
}

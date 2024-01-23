import React from 'react'
import Acordeon from '../components/Acordeon';


export function Settings() {
    return (
        <div className='flex flex-col w-100'>
            <div className="w-100 flex text-2xl font-bold justify-center">Configuración</div>
            <div className="flex flex-row w-100 justify-between">
                <div className="w-1/4 bg-zinc-950 text-white p-4 ">
                    <Acordeon />
                </div>
                <div className=" flex w-2/4 flex-col gap-5">
                    <div className="flex justify-between w-full font-bold"><p>Limites del trading</p><p>Limite</p></div>
                    <div className="flex justify-between w-full text-zinc-400 "><p>*Numero maximo de posiciones abiertas</p><p>100</p></div>
                    <div className="flex justify-between w-full text-zinc-400 "><p>*Saldo maximo de la cuenta</p><p>No está ajustado</p></div>
                    <div className="flex justify-between w-full text-zinc-400 "><p>*Maximo de opagos agregados en posiciones abiertas</p><p>50.000.00</p></div>
                    <div className="flex justify-between w-full text-zinc-600 text-xs "><p>*Cualquier limite en la configuración anulará estos limites predeterminados</p><p> </p></div>
                    <div className="flex justify-between w-full font-bold"><p>Volumen diario máximo de negocios</p><p>Limite</p></div>
                    <div className="flex justify-between w-full text-zinc-400 "><p>*Materias primas</p><p>50.000.00</p></div>
                    <div className="flex justify-between w-full text-zinc-400 "><p>*Forex</p><p>100.000.00</p></div>
                    <div className="flex justify-between w-full text-zinc-400 pl-2 "><p>*Pares menotes </p><p>100.000.00</p></div>
                    <div className="flex justify-between w-full text-zinc-400 pl-2 "><p>*Pares mayores </p><p>50.000.00</p></div>
                    <div className="flex justify-between w-full text-zinc-400 "><p>*Indices Stock</p><p>100.000.00</p></div>
                    <div className="flex justify-between w-full text-zinc-400 "><p>*Derivados</p><p>500.000.00</p></div>
                    <div className="flex justify-between w-full text-zinc-400 pl-2 "><p>*Cesta de materias primas</p><p>50.000.00</p></div>
                    <div className="flex justify-between w-full text-zinc-400 pl-2 "><p>*Cesta forex</p><p>50.000.00</p></div>
                </div>
                <div className=" flex flex-col w-1/4 gap-5 ml-5">
                    <div className="bg-zinc-900 w-3/4 p-5 rounded-md">
                    <p>Limites de la cuenta</p>
                    <p className='text-xs text-zinc-400 '>Estos son los limites predeterminados <br />que aplicamos a sus cuentas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

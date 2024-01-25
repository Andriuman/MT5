import React from 'react';
import info from '../assets/info.png'
import ico1 from '../assets/ico1.png'
import ico2 from '../assets/ico2.png'
import ico3 from '../assets/ico3.png'
import Ra from '../assets/Ra.png'
import Calendario from '../assets/Calendario.png'
import Menu from "../components/menuInformes";

export function Informes3() {
    return (
        <div className='flex flex-col w-full'>
            <div className="w-full flex text-2xl font-bold justify-center">Informes</div>
            <div className="flex flex-row ">
                <div className="w-1/4 bg-zinc-950 text-white p-4">
                    <Menu activeOption={"HOLA"} />
                </div>
                <div className="pt-10 flex w-3/4 flex-col gap-5 justify-center items-center">
                    <div className="flex flex-row items-end w-full justify-end gap-3">
                        <button className='flex flex-row items-center gap-3 pl-10 pr-10 pt-1 pb-1 border border-white rounded'>
                            <img className='w-4 h-4' src={Calendario} alt="" />
                            <p>Desde fecha</p>
                        </button>
                        <button className='flex flex-row items-center gap-3 pl-10 pr-10 pt-1 pb-1 border border-white rounded'>
                            <img className='w-4 h-4' src={Calendario} alt="" />
                            <p>Hoy</p>
                        </button>
                        <button className='flex flex-row items-center gap-3 pl-5 pr-5 pt-1 pb-1 border border-white rounded mr-10'>
                            <img className='w-4 h-4' src={Ra} alt="" />
                            <p>Todas las transacciones</p>
                        </button>
                    </div>
                    <div className="flex flex-col bg-zinc-95 mb-40">
                        <div className="flex flex-row h-20 p-4 font-bold">
                            <p className='w-40 flex justify-center items-center'>Tipo</p>
                            <p className='w-40 flex justify-center items-center'>ID de ref</p>
                            <p className='w-40 flex justify-center items-center'>Moneda</p>
                            <p className='w-40 flex justify-center items-center'>Hora de la transacción</p>
                            <p className='w-40 flex justify-center items-center'>transacción</p>
                            <p className='w-40 flex justify-center items-center'>Crédito/débito</p>
                            <p className='w-40 flex justify-center items-center'>Balance</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Cuenta</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>111758682301</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>24 nov. 2023 <br />07:36:25 GMT</p>
                            <p className='w-40 flex justify-center items-center text-blue-500'>Retirar</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>-23.000 eUSDT</p>
                            <p className='w-40 flex justify-center items-center'></p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Cuenta</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>111758682301</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>21 nov. 2023 <br />03:27:53 GMT</p>
                            <p className='w-40 flex justify-center items-center text-blue-500'>Retirar</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>-23.000 eUSDT</p>
                            <p className='w-40 flex justify-center items-center'></p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Cuenta</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>111758682301</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>20 nov. 2023 <br />18:26:58 GMT</p>
                            <p className='w-40 flex justify-center items-center text-blue-500'>Retirar</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>-24.000 eUSDT</p>
                            <p className='w-40 flex justify-center items-center'></p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Cuenta</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>111758682301</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>15 nov. 2023 <br />09:38:51 GMT</p>
                            <p className='w-40 flex justify-center items-center text-blue-500'>Retirar</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>-15.000 eUSDT</p>
                            <p className='w-40 flex justify-center items-center'></p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Cuenta</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>106288141241</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>18 oct. 2023 <br />01:50:02 GMT</p>
                            <p className='w-40 flex justify-center items-center text-blue-500'>Retirar</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>-10.000 eUSDT</p>
                            <p className='w-40 flex justify-center items-center'></p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Cuenta</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>106288141241</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>25 sep. 2023 <br />16:23:36 GMT</p>
                            <p className='w-40 flex justify-center items-center text-blue-500'>Retirar</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>-7.000 eUSDT</p>
                            <p className='w-40 flex justify-center items-center'></p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Cuenta</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>106288141241</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>16 sep. 2023 <br />18:18:53 GMT</p>
                            <p className='w-40 flex justify-center items-center text-blue-500'>Retirar</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>-15.000 eUSDT</p>
                            <p className='w-40 flex justify-center items-center'></p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>102557302741</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>13 sep. 2023 <br />14:46:39 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+22.000 eUSDT</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>102435563241</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>08 sep. 2023 <br />19:39:59 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+13.000 eUSDT</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>100740648721</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>05 sep. 2023 <br />04:48:50 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+4.000 eUSDT</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>100596114563</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>18 ago. 2023 <br />05:38:52 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+10.000 eUSDT</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>100595201561</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>09 ago. 2023 <br />06:57:14 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+7.500 eUSDT</p>
                        </div>


                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>106288141241</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>03 ago. 2023 <br />10:15:23 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+12.000 eUSDT</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>100595201561</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>27 jul. 2023 <br />24:53:24 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+14.000 eUSDT</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>100595201561</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>13 jul. 2023 <br />06:20:01 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+5.000 eUSDT</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>100595201561</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>07 jul. 2023 <br />08:50:13 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+2.500 eUSDT</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>100595201561</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>25 jun. 2023 <br />17:34:14 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+10.000 eUSDT</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>106288141241</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>01 jun. 2023 <br />12:42:54 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+10.000 eUSDT</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>100740648721</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>26 may. 2023 <br />16:53:43 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+12.500 eUSDT</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>100595201561</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>16 may. 2023 <br />13:37:44 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+8.000 eUSDT</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>106288141241</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>20 abr. 2023 <br />19:23:14 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+7.500 eUSDT</p>
                        </div>
                        <div className="flex flex-row p-4">
                            <p className='w-40 flex justify-center items-center text-zinc-400'>Wallet</p>
                            <p className='w-40 flex justify-center items-center text-zinc-400'>100740648721</p>
                            <p className='w-40 flex justify-center items-center text-white'><p className="bg-teal-300 rounded p-1 text-xs font-bold">eUSDT</p></p>
                            <p className='w-40 flex items-center text-zinc-400'>30 mar. 2023 <br />15:37:54 GMT</p>
                            <p className='w-40 flex justify-center items-center text-red-500'>Transferido</p>
                            <p className='w-40 flex justify-center items-center'></p>
                            <p className='w-40 flex justify-center items-center text-emerald-500'>+14.000 eUSDT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed top-20 right-20 text-xl"><a href="/">X</a></div>
        </div>
    );
}

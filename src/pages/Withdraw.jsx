import React from "react";
import Menu from "../components/Menu";
import error from "../assets/error.png"; 

export function Withdraw() {
  return (
    <div>
      <div className="text-white font-semibold bg-zinc-950 flex justify-center items-center h-16 text-2xl">
        Cajero
      </div>
      <div className="flex h-screen text-white bg-zinc-950">
        {/* Menú en la primera parte */}
        <div className="w-1/4 bg-zinc-950 text-white p-4">
          <Menu activeOption={"retirar"} />
        </div>

        {/* Contenido desplazable en la segunda parte */}
        <div className="w-1/2 bg-zinc-950 text-white p-4 overflow-y-auto">
          <div className="scroll-container">    
            <div className="text-center">
              <img
                className="mx-auto mb-4 "
                src={error}
                alt="Error al retirar"
                width="200"
              />
              <div className="text-2xl font-semibold mb-4">
                No tiene fondos en su cuenta eUSDT
              </div>
              <div className="text-gray-400 mb-6">
                Haga un depósito para usar esta función
              </div>
              <button className="bg-red-500 text-white rounded-full py-2 px-4 hover:bg-red-600 transition duration-300">
                Depositar ahora
              </button>
            </div>
            {/* Contenido scroll */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;

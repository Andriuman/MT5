import React from "react";
import Menu from "../components/Menu";
import card from "../assets/card.png"
import banking from "../assets/banking.png"
import ewallet from "../assets/ewallet.png"
import pay from "../assets/pay.png"
import bitcoin from "../assets/bitcoin.png"
import etherum from "../assets/etherum.png"
import litecoin from "../assets/litecoin.png"
import dollar from "../assets/dollar.png"
import tether from "../assets/tether.png"

export function CheckerPage() {
  return (
    <div>
      <div className="text-white font-semibold bg-zinc-950 flex justify-center items-center h-16 text-2xl">
        Cajero
      </div>
      <div className="flex h-screen text-white bg-zinc-950">
        {/* Menú en la primera parte */}
        <div className="w-1/4 bg-zinc-950 text-white p-4">
          <Menu activeOption={"depositar"} />
        </div>

        {/* Contenido desplazable en la segunda parte */}
        <div className="w-1/2 bg-zinc-950 text-white p-4 overflow-y-auto">
          <div className="scroll-container">
            <div className="bg-blue-950 text-gray-500 text-2lg p-4 rounded-lg flex items-center">
              <svg
                className="h-6 w-6 mr-2 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                ></path>
              </svg>
              <h1>
                Esta es su cuenta{" "}
                <strong className="text-gray-400">eUSDT</strong> CR4258711
              </h1>
            </div>
            <h1 className="text-4xl font-semibold text-white my-8">
              Depositar mediante transferencia bancaria, tarjeta de crédito y
              billetera electrónica
            </h1>
            <div className="bg-zinc-950 p-4 rounded-lg mb-4 border border-white">
              <div className="flex items-center">
                <div className="mr-2 text-gray-400">
                  Deposite a través de los siguientes métodos de pago:
                </div>
                <svg
                  className="h-6 w-6 text-gray-500 ml-auto transition-transform transform hover:rotate-90 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  onClick={() => {
                    // Lógica del click
                    console.log("Click");
                  }}
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  ></path>
                </svg>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex items-center mr-4">
                  <img className="h-8 w-8" src={card} alt="Banco 1" />
                  <span className="text-xs text-white font-bold ml-2">
                    Credit / Debit
                  </span>
                </div>
                <div className="flex items-center mr-4">
                  <img className="h-8 w-8" src={banking} alt="Banco 2" />
                  <span className="text-xs text-white font-bold ml-2">
                    Transferencia Bancaria
                  </span>
                </div>
                <div className="flex items-center mr-4">
                  <img className="h-8 w-8" src={ewallet} alt="Banco 3" />
                  <span className="text-xs text-white font-bold ml-2">
                    E-wallet
                  </span>
                </div>
                <div className="flex items-center">
                  <img className="h-8 w-8" src={pay} alt="Banco 4" />
                  <span className="text-xs text-white font-bold ml-2">
                    Pago local en efectivo
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-semibold text-white my-8">
              Depositar criptomonedas
            </h1>
            <div className="bg-zinc-950 p-4 rounded-lg mb-4 border border-white">
              <div className="flex items-center">
                <div className="mr-2 text-gray-400">
                  Aceptamos las siguientes criptomonedas:
                </div>
                <svg
                  className="h-6 w-6 text-gray-500 ml-auto transition-transform transform hover:rotate-90 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  onClick={() => {
                    // Lógica del click
                    console.log("Click");
                  }}
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  ></path>
                </svg>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex items-center mr-4">
                  <img className="h-8 w-8" src={bitcoin} alt="Crypto 1" />
                  <span className="text-xs text-white font-bold ml-2">
                    Bitcoin
                  </span>
                </div>
                <div className="flex items-center mr-4">
                  <img className="h-8 w-8" src={etherum} alt="Crypto 2" />
                  <span className="text-xs text-white font-bold ml-2">
                    Etherum
                  </span>
                </div>
                <div className="flex items-center mr-4">
                  <img className="h-8 w-8" src={litecoin} alt="Crypto 3" />
                  <span className="text-xs text-white font-bold ml-2">
                    Litecoin
                  </span>
                </div>
                <div className="flex items-center mr-4">
                  <img className="h-8 w-8" src={dollar} alt="Crypto 4" />
                  <span className="text-xs text-white font-bold ml-2">
                    USD Coin
                  </span>
                </div>
                <div className="flex items-center">
                  <img className="h-8 w-8" src={tether} alt="Crypto 5" />
                  <span className="text-xs text-white font-bold ml-2">
                    Tether
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-semibold text-white my-8">
              Comprar criptomonedas
            </h1>
            <div className="bg-zinc-950 p-4 rounded-lg mb-4 border border-white">
              <div className="flex items-center">
                <div className="mr-2 text-gray-400">
                  Puedes comprar las siguientes criptomonedas:
                </div>
                <svg
                  className="h-6 w-6 text-gray-500 ml-auto transition-transform transform hover:rotate-90 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  onClick={() => {
                    // Lógica del click
                    console.log("Click");
                  }}
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  ></path>
                </svg>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex items-center mr-4">
                  <img className="h-8 w-8" src={bitcoin} alt="Moneda 1" />
                  <span className="text-xs text-white font-bold ml-2">
                    Bitcoin
                  </span>
                </div>
                <div className="flex items-center mr-4">
                  <img className="h-8 w-8" src={etherum} alt="Moneda 2" />
                  <span className="text-xs text-white font-bold ml-2">
                    Etherum
                  </span>
                </div>
                <div className="flex items-center mr-4">
                  <img className="h-8 w-8" src={litecoin} alt="Moneda 3" />
                  <span className="text-xs text-white font-bold ml-2">
                    Litecoin
                  </span>
                </div>
                <div className="flex items-center mr-4">
                  <img className="h-8 w-8" src={dollar} alt="Moneda 4" />
                  <span className="text-xs text-white font-bold ml-2">
                    USD Coin
                  </span>
                </div>
                <div className="flex items-center">
                  <img className="h-8 w-8" src={tether} alt="Moneda 5" />
                  <span className="text-xs text-white font-bold ml-2">
                    Tether
                  </span>
                </div>
              </div>
            </div>
            {/* Contenido scroll */}
          </div>
        </div>

        {/* Derecha de cajero */}
        <div className="flex flex-col w-1/4 bg-zinc-950 text-white">
          <div className="bg-zinc-900 text-gray-500 text-2lg p-4 rounded-lg mb-4 max-w-[400px]">
            <div>
              ¿No quiere comerciar en el USDT? Puede abrir otra cuenta de
              criptomoneda.
            </div>
            <div className="flex items-center mt-4">
              <div className="text-red-500">Gestione sus cuentas</div>
              <svg
                className="h-6 w-6 ml-2 text-red-500 transition-transform transform hover:rotate-90 cursor-pointer"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                onClick={() => {
                  // Logica del click
                  console.log("Click");
                }}
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="bg-zinc-900 text-gray-500 text-2lg p-4 rounded-lg max-w-[400px]">
            Aprenda más sobre los{" "}
            <span className="text-red-500">métodos de pago.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckerPage;

// Menu.jsx

import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ activeOption }) => {
  return (
    <div className="flex flex-col items-center justify-between p-4 bg-zinc-900 rounded-lg border-zinc-900 border-2">
      <div className="flex flex-col text-gray-500 space-y-2 w-full">
        <Link
          to="/depositar"
          className={`opcion-menu-container relative p-2 rounded-lg flex items-center ${
            activeOption === "depositar"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white cursor-pointer"
          }`}
        >
          {activeOption === "depositar" && (
            <div className="barra-roja absolute left-0 top-0 h-full w-1 bg-red-500 rounded-md"></div>
          )}
          <svg
            className="h-6 w-6 mr-2 text-gray-500"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            ></path>
          </svg>
          <div className="opcion-menu">Depositar</div>
        </Link>

        <Link
          to="/retirar"
          className={`opcion-menu-container relative p-2 rounded-lg flex items-center ${
            activeOption === "retirar"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white cursor-pointer"
          }`}
        >
          {activeOption === "retirar" && (
            <div className="barra-roja absolute left-0 top-0 h-full w-1 bg-red-500 rounded-md"></div>
          )}
          <svg
            className="h-6 w-6 mr-2 text-gray-500"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            ></path>
          </svg>
          <div className="opcion-menu">Retirar</div>
        </Link>

        <Link
          to="/pagos"
          className={`opcion-menu-container relative p-2 rounded-lg flex items-center ${
            activeOption === "agentes"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white cursor-pointer"
          }`}
        >
          {activeOption === "agentes" && (
            <div className="barra-roja absolute left-0 top-0 h-full w-1 bg-red-500 rounded-md"></div>
          )}
          <svg
            className="h-6 w-6 mr-2 text-gray-500"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>
          <div className="opcion-menu">Agentes de pago</div>
        </Link>

        <Link
          to="/transferencia"
          className={`opcion-menu-container relative p-2 rounded-lg flex items-center ${
            activeOption === "transferencia"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white cursor-pointer"
          }`}
        >
          {activeOption === "transferencia" && (
            <div className="barra-roja absolute left-0 top-0 h-full w-1 bg-red-500 rounded-md"></div>
          )}
          <svg
            className="h-6 w-6 mr-2 text-gray-500"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            ></path>
          </svg>
          <div className="opcion-menu">Transferir</div>
        </Link>

        <Link
          to="/fiat"
          className={`opcion-menu-container relative p-2 rounded-lg flex items-center ${
            activeOption === "fiat"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white cursor-pointer"
          }`}
        >
          {activeOption === "fiat" && (
            <div className="barra-roja absolute left-0 top-0 h-full w-1 bg-red-500 rounded-md"></div>
          )}
          <svg
            className="h-6 w-6 mr-2 text-gray-500"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
            ></path>
          </svg>
          <div className="opcion-menu">Fiat onramp</div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;

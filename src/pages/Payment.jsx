import React, { useState } from "react";
import Menu from "../components/Menu";
import mark from "../assets/mark.png";

export function Payment() {
  // Estado para gestionar la selección entre "Depositar" y "Retirar"
  const [paymentOption, setPaymentOption] = useState("pay");
  // Estado para controlar si el panel de información de "Depositar" está desplegado
  const [depositInfoOpen, setDepositInfoOpen] = useState(true); // Establecer en true inicialmente

  // Función para alternar el estado de depositInfoOpen
  const toggleDepositInfo = () => {
    setDepositInfoOpen(!depositInfoOpen);
  };

  return (
    <div>
      <div className="text-white font-semibold bg-zinc-950 flex justify-center items-center h-16 text-2xl">
        Cajero
      </div>
      <div className="flex h-screen text-white bg-zinc-950">
        {/* Menú en la primera parte */}
        <div className="w-1/4 bg-zinc-950 text-white p-4">
          <Menu activeOption={"agentes"} />

          {/* Anuncio redondeado debajo del menú */}
          <div className="mt-4 bg-zinc-950 text-gray-500 text-2lg p-1 rounded-lg cursor-pointer border border-white">
            <div className="w-full flex items-center justify-center">
              <span className="text-white">
                Aprende más sobre los métodos de pago
              </span>
            </div>
          </div>
        </div>

        {/* Contenido desplazable en la segunda parte */}
        <div className="w-1/2 bg-zinc-950 text-white p-4 overflow-y-auto">
          {/* Información del medio */}
          <div className="flex items-start">
            {/* Cajón depositar */}
            <div
              className={`w-40 bg-zinc-950 text-gray-500 text-2lg p-4 cursor-pointer relative border transition-all ${
                paymentOption === "pay" ? "border-red-500" : "border-zinc-950"
              }`}
              onClick={() => {
                setPaymentOption("pay");
                toggleDepositInfo();
              }}
            >
              <div className="w-full flex items-center justify-center">
                <span
                  className={`${
                    paymentOption === "pay" ? "text-white" : "text-gray-500"
                  } mb-2`}
                >
                  Depositar
                </span>
              </div>
              {paymentOption === "pay" && (
                <div
                  className={`w-20 h-1 bg-red-500 absolute bottom-4 left-0 right-0 mx-auto transform -translate-y-[-50%] ${
                    paymentOption === "pay" ? "" : "bg-gray-500"
                  }`}
                ></div>
              )}
            </div>

            {/* Cajón retirar */}
            <div
              className={`w-40 bg-zinc-950 text-gray-500 text-2lg p-4 cursor-pointer relative border transition-all ${
                paymentOption === "withdraw"
                  ? "border-red-500"
                  : "border-zinc-950"
              }`}
              onClick={() => {
                setPaymentOption("withdraw");
                setDepositInfoOpen(false); // Establecer en false al cambiar a "Retirar"
              }}
            >
              <div className="w-full flex items-center justify-center">
                <span
                  className={`${
                    paymentOption === "withdraw"
                      ? "text-white"
                      : "text-gray-500"
                  } mb-2`}
                >
                  Retirar
                </span>
              </div>
              {paymentOption === "withdraw" && (
                <div
                  className={`w-20 h-1 bg-red-500 absolute bottom-4 left-0 right-0 mx-auto transform -translate-y-[-50%] ${
                    paymentOption === "withdraw" ? "" : "bg-gray-500"
                  }`}
                ></div>
              )}
            </div>
          </div>
          {/* Contenido adicional para "Retirar" */}
          {paymentOption === "withdraw" && (
            <div className="mt-4 p-4 text-center">
              {/* Contenedor centrado para la imagen y el texto */}
              <div className="mx-auto">
                {/* Imagen centrada */}
                <div className="w-48 h-48 mb-4 mx-auto">
                  <img src={mark} alt="Alerta" />
                </div>

                {/* Texto en rojo centrado */}
                <div className="text-red-500">
                  Los retiros no son posibles porque aún no hay fondos en esta
                  cuenta.
                </div>
              </div>
            </div>
          )}

          {/* Contenido adicional para "Pagar" */}
          {paymentOption === "pay" && depositInfoOpen && (
            <div className="mt-4 p-4">
              {/* Div de información sobre pago */}
              <div className="text-gray-500 text-lg mb-2">
                Póngase en contacto con su agente de pago preferido para obtener
                instrucciones de pago y realizar su depósito.
              </div>

              {/* Div del buscador delgado y filtrador */}
              <div className="flex items-center mb-4">
                <div className="flex-1 relative border border-gray-500 rounded-md p-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                    {/* Icono de búsqueda a la izquierda */}
                    <div
                      onClick={() => {
                        // Lógica de clic para el ícono de búsqueda
                        console.log("Clic en el ícono de búsqueda");
                      }}
                      className="cursor-pointer"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-gray-500"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="M21 21l-4.35-4.35"></path>
                      </svg>
                    </div>
                  </div>
                  {/* Espacio para el ícono */}
                  <input
                    type="text"
                    placeholder="Buscar nombre del agente de pagos"
                    className="bg-transparent border-none outline-none text-gray-500 w-full pl-8"
                  />
                </div>
                {/* Filtrador con la flecha desplegable */}
                <div
                  onClick={() => {
                    // Lógica de clic para el ícono de flecha desplegable
                    console.log("Clic en el ícono de flecha desplegable");
                  }}
                  className="border border-gray-500 rounded-md p-2 pr-4 flex items-center ml-2 cursor-pointer"
                >
                  <span className="text-gray-500">
                    Todos los métodos de pago
                  </span>
                  <div className="ml-2">
                    {/* Icono de flecha */}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Div después del buscador y filtrador que contiene 4 divs */}
              <div className="flex flex-col justify-between p-4 bg-zinc-900 rounded-lg border-zinc-900 border-2">
                {/* Primer div con título alineado con el segundo div */}
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-white font-semibold text-2xl">
                      Ebers Rios
                    </p>
                  </div>
                  {/* Segundo div con un SVG de flecha totalmente a la derecha */}
                  <div
                    onClick={() => {
                      // Lógica de clic para el ícono de flecha
                      console.log("Clic en el ícono de flecha");
                    }}
                    className="w-6 h-6 cursor-pointer"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>

                {/* Segundo div con texto */}
                <div className="mt-2 text-gray-500">
                  <p>
                    Venta y compra según a la TRM de Colombia del día, pregunta
                    por disponibilidad.
                  </p>
                </div>

                {/* Tercer div con texto en rojo temático */}
                <div className="mt-2">
                  <p className="text-red-500">https://t.me/Ebarrios</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Derecha de cajero */}
        <div className="flex flex-col w-1/4 bg-zinc-950 text-white">
          <div className="bg-zinc-900 text-gray-500 text-2lg p-4 rounded-lg mb-4 max-w-[400px]">
            <div className="bg-zinc-900 text-white font-semibold text-2lg p-1 rounded-lg max-w-[400px]">
              AVISO LEGAL
            </div>
            <div>
              Deriv no está asociado con ningún agente de pago. Los clientes
              tratan con los agentes de pago bajo su propia responsabilidad. Se
              recomienda a los clientes que comprueben las credenciales de los
              agentes de pago y la exactitud de cualquier información sobre los
              agentes de pago (en Deriv o en otro lugar) antes de utilizar sus
              servicios
            </div>
          </div>
          <div className="bg-zinc-900 text-gray-500 text-2lg p-4 rounded-lg mb-4 max-w-[400px]">
            <div className="bg-zinc-900 text-white font-semibold text-2lg p-1 rounded-lg max-w-[400px]">
              Nota
            </div>
            <div>
              Es posible que algunos métodos de pago no aparezcan aquí, pero puede que los
              agentes de pago los ofrezcan igualmente. Si no encuentra su método favorito, 
              póngase en contacto directamente con los agentes de pago para comprobar
              con más detalles.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import banxa from "../assets/banxa.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import american from "../assets/american.png";
import visa from "../assets/visa.png";
import paypal from "../assets/paypal.png";
import stripe from "../assets/stripe.png";

export function Fiat() {
  // Configuración del carrusel
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <div className="text-white font-semibold bg-zinc-950 flex justify-center items-center h-16 text-2xl">
        Cajero
      </div>
      <div className="flex h-screen text-white bg-zinc-950">
        {/* Menú en la primera parte */}
        <div className="w-1/4 bg-zinc-950 text-white p-4">
          <Menu activeOption={"fiat"} />

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
        <div className="flex flex-col w-full bg-zinc-950 text-white">
          {/* Div que contiene el título centrado */}
          <div className="flex justify-center font-semibold items-center h-16 text-2xl text-gray-400 mb-8">
            Seleccione canal de pago
          </div>

          {/* Tarjeta de Información */}
          <div className="mx-auto max-w-4xl p-4 bg-black rounded-lg shadow-lg flex">
            {/* Div 1: Imagen del Banco */}
            <div className="w-1/3 flex justify-center items-center">
              <img src={banxa} alt="Logo del Banco" className="w-3/3 h-1/2" />
            </div>

            {/* Div 2 y 3: Título y Texto */}
            <div className="w-1/3 px-4">
              {/* Div 2: Título */}
              <div className="text-white text-2xl mb-2 font-semibold">
                Banxa
              </div>

              {/* Div 3: Texto */}
              <div className="text-gray-500 mb-2 text-sm">
                Un servicio de pago fiat a cripto rápido y seguro. Deposite
                criptomonedas desde cualquier parte del mundo utilizando sus
                tarjetas de crédito/débito y transferencias bancarias.
              </div>

              {/* Div 4: Slider de Imágenes */}
              <div className="mb-4 w-10">
                <Slider {...sliderSettings}>
                    <img
                      src={visa}
                      alt="Método de Pago 1"
                      className="w-10 h-10"
                    />
                    <img
                      src={american}
                      alt="Método de Pago 2"
                      className="w-10 h-10"
                    />

                    <img
                      src={paypal}
                      alt="Método de Pago 3"
                      className="w-10 h-10"
                    />
                    <img
                      src={stripe}
                      alt="Método de Pago 4"
                      className="w-10 h-10"
                    />
                  
                  {/* Agregar unas 4 imágenes más */}
                </Slider>
              </div>
            </div>

            {/* Div 5: Botón Seleccionar */}
            <div className="w-1/3 flex items-center justify-center">
              <button className="bg-red-500 text-white py-2 px-4 rounded">
                Seleccionar
              </button>
            </div>
          </div>
        </div>

        {/* Derecha*/}
        <div className="flex flex-col w-1/4 bg-zinc-950 text-white p-4">
          <div className="bg-zinc-900 text-gray-500 text-2lg rounded-lg mb-4 max-w-[400px]">
            <div className="bg-zinc-900 text-white font-semibold text-2lg m-4 rounded-lg">
              ¿Qué es Fiat onramp?
            </div>
            <div className="m-4">
              Fiat onramp es un servicio de caja que le permite convertir
              monedas fiduciarias a cripto para recargar sus cuentas cripto de
              Deriv. Aquí se enumeran los intercambios criptos de terceros.
              Deberá crear una cuenta con ellos para utilizar sus servicios.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fiat;

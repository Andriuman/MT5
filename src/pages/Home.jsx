import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div className="containerbg w-screen bg-white flex justify-around">
            <div className="w-[calc(50%+50px)] flex justify-center flex-col items-center gap-10">
                <h1 className='containerText text-black text-5xl font-medium'>Un bróker,<br></br>
                    innumerables oportunidades
                    para hacer trading</h1>
                <h3 className='containerText text-black text-2xl w-1/2'>Obtenga la más amplia gama de mercados, operaciones y plataformas</h3>
                <button class="bg-red-500 text-white px-4 py-2 rounded-full h-20 text-xl font-semibold flex justify-center items-center">Crear una cuenta demo gratis</button>
            </div>
            <div id="divbg" className="w-[calc(50%+50px)] flex item-end justify-end h-ful">
            </div>
            <style>
                {`
                #divbg{
                    background-size: contain;
                    background-repeat: no-repeat;

                    animation: cambioImagen 35s infinite linear;
                }

                @keyframes cambioImagen {
                    0%, 100%{
                      background-image: url('src/assets/toppng.com-ensando-especialmente-en-las-personas-con-movilidad-imagenes-de-personas-1057x1162.png')
                    }
                    15%{
                        background-image: url('src/assets/toppng.com-ensando-especialmente-en-las-personas-con-movilidad-imagenes-de-personas-1057x1162.png')
                      }
                    40% {
                      background-image: url('src/assets/—Pngtree—man in shirt smiles and_13146348.png');
                    }
                    55% {
                        background-image: url('src/assets/—Pngtree—man in shirt smiles and_13146348.png');
                      }
                    60% {
                        background-image: url('src/assets/toppng.com-business-man-1301x1718.png');
                      }
                    75% {
                        background-image: url('src/assets/toppng.com-business-man-1301x1718.png');
                    }
                    
                  }

                .containerbg {
                 height:90vh;
                    width:100vw;
                    background:linear-gradient(-80deg, #EF4444, #EF4444 50%, white 50%, white);

                .containerText{
                width: 90%
                }
        `}
            </style>
            <div className="fixed top-0 w-full bg-white h-20 text-zinc-500 flex flex-row justify-around items-center">
                <div className="">
                    <img className='w-40' src="https://deriv.com/static/og_deriv-a4f062ad58a73113fccfaf1b948a8a19.jpg" alt="Logo" />
                </div>
                <div className="">
                    <ul className='flex flex-row justify-between gap-10'>
                        <li><a href="">Opere</a></li>
                        <li><a href="">Mercados</a></li>
                        <li><a href="">Sobre nosotros</a></li>
                        <li><a href="">Recursos</a></li>
                    </ul>
                </div>
                <div className=" flex flex-row gap-5 items-center">
                    <Link to="/login" className='p-3 border border-black rounded font-bold text-black '>Iniciar sesión</Link>
                    <button className='p-3 border rounded font-bold text-white bg-red-500 '>Abrir cuenta demo</button>
                    <div className="flex flex-row"><img className='w-5' src="https://icones.pro/wp-content/uploads/2021/06/icone-du-monde-noir.png" alt="" />ES</div>
                </div>
            </div>
        </div>


    )
}

export default Home;

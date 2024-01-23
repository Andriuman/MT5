import React from 'react';

export function Home() {
    return (
        <div className="containerbg w-screen bg-white flex justify-around">
            <div className="w-[calc(50%+50px)] flex justify-center flex-col items-center gap-10">
                <h1 className='containerText text-black text-5xl font-medium'>Un bróker,<br></br>
                    innumerables oportunidades
                    para hacer trading</h1>
                <h3 className='containerText text-black text-2xl w-1/2'>Obtenga la más amplia gama de mercados, operaciones y plataformas</h3>
                <h2 className='containerText text-black text-3xl font-bold'>Materias primas</h2>
                <button class="bg-red-500 text-white px-4 py-2 rounded-full h-20 text-xl font-semibold">Crear una cuenta demo gratis</button>
            </div>
            <div className="w-[calc(50%+50px)] flex item-end justify-end h-100"><img src="src\images\toppng.com-ensando-especialmente-en-las-personas-con-movilidad-imagenes-de-personas-1057x1162.png" className='h-full ' alt="" /></div>
            <style>
                {`
          .containerbg {
            height:90vh;
            width:100vw;
            background:linear-gradient(-80deg, #EF4444, #EF4444 50%, white 50%, white);

          .containerText{
            width: 90%
          }
        `}
            </style>
        </div>

    )
}

export default Home;

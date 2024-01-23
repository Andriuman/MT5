import React, { useState } from 'react';

const AccordeonTickets = ({ fecha, accion, asunto, correo, estado, contenido }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded mb-1">
      <div
        className="flex items-center p-4 cursor-pointer bg-zinc-900 text-zinc-400 font-medium"
        onClick={toggleAccordion}
      >
        <div className='w-60 text-xs'>
          <div>{fecha}</div>
        </div >
        <div className='w-20 text-xs flex justify-start p-0'>
          <div>{accion}</div>
        </div>
        <div className='w-80 text-xs'>
          <div>{asunto}</div>
        </div>
        <div className='w-60 text-xs'>
          <div>{correo}</div>
        </div>
        <div className='w-40 text-xs'>
          <div>{estado}</div>
        </div>
        <div className={`transform ${isOpen ? 'rotate-0' : 'rotate-180'}`}>
          &#9660;
        </div>
      </div>
      {isOpen && (
        <div className="p-4 bg-zinc-900 text-white p-5">
          
          <div className='text-xs text-zinc-400'>{contenido}</div>
          
        </div>
      )}
    </div>
  );
};

export default AccordeonTickets;

import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('real');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const countriesReal = ['Australia', 'Canadá', 'Sudáfrica'];
  const countriesDemo = ['Colombia', 'España', 'Chile'];

  return (
    <div className="relative inline-block text-left">
      {/* Botón que controla la visibilidad del desplegable */}
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-zinc-950 text-sm font-medium text-magenta "
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          0.00 eUSDT
        </button>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5">
          {/* Tabs para seleccionar la columna */}
          <div className="px-0 py-2">
            <div className="flex justify-between">
              <button
                className={`text-sm font-medium ${activeTab === 'real' ? 'text-white border-b-2 border-red-500' : 'text-zinc-500'} w-1/2`}
                onClick={() => setActiveTab('real')}
              >
                Real
              </button>
              <button
                className={`text-sm font-medium ${activeTab === 'demo' ? 'text-white border-b-2 border-red-500' : 'text-zinc-500'} w-1/2`}
                onClick={() => setActiveTab('demo')}
              >
                Demo
              </button>
            </div>
          </div>
          {/* Contenido del Dropdown */}
          <div className="py-1">
            {activeTab === 'real' && (
              <div className="px-4 py-2">
                {countriesReal.map((country, index) => (
                  <div key={`real-${index}`} className="flex justify-between items-center text-white py-1">
                    <div className="flex items-center">
                      <img src="/src/images/libra.png" alt="Libra" className="h-5 w-5 mr-2" />
                      <span>{country}</span>
                    </div>
                    <span>0.11111111</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'demo' && (
              <div className="px-4 py-2">
                {countriesDemo.map((country, index) => (
                  <div key={`demo-${index}`} className="flex justify-between items-center text-white py-1">
                    <div className="flex items-center">
                      <img src="/src/images/libra.png" alt="Libra" className="h-5 w-5 mr-2" />
                      <span>{country}</span>
                    </div>
                    <span>0.11111111</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div class="flex justify-between px-2 py-2">
            <p className='text-white text-s'>Total de activos</p>
            <p className='text-white text-s'>0.00 GBP</p>
          </div>
          <div class="flex justify-between px-1 py-2">
            <p className='text-red-900 text-xs'>¿Buscas cuentas de CDF? Dirijase al Hub</p>
          </div>
          <div class="flex justify-between px-7 py-2">
            <button className="bg-gray-900 text-white border border-white px-2 py-2 rounded"><p className='text-white text-xs'>Gestionar cuenta</p></button>
            <div className='text-white px-2 py-2 rounded'><p className='text-white text-xs'><a href="">Salir</a></p></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

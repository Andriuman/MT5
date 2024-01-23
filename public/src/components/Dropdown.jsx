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
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-black text-sm font-medium text-magenta "
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
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5">
          {/* Tabs para seleccionar la columna */}
          <div className="px-4 py-2">
            <div className="flex justify-between">
              <button
                className={`text-sm font-medium ${activeTab === 'real' ? 'text-black border-b-2 border-red-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('real')}
              >
                Real
              </button>
              <button
                className={`text-sm font-medium ${activeTab === 'demo' ? 'text-black border-b-2 border-red-500' : 'text-gray-400'}`}
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
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('real');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const countriesReal = ['Pound Sterling', 'Bitcoin', 'Etherium', 'Litecoin', 'Tether ERC20', 'Tether TRC20'];
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
        <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5">
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
              <div className="">
                <div className="flex flex-row justify-between p-1">
                  <div className="flex flex-row items-center gap-2">
                    <img   src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" alt="Pound" className='h-5 w-5 rounded-full'/>
                    <div className="">
                      <h1 className='text-white'>Pound Sterling</h1>
                      <p className='text-zinc-400 text-xs'>CR4168557</p>
                    </div>
                  </div>
                  <div className=" text-white">
                    <h1>0.00 GBP</h1>
                  </div>
                </div>
                <div className="flex flex-row justify-between p-1">
                  <div className="flex flex-row items-center gap-2">
                    <img   src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="Bitcoin" className='h-5 w-5 rounded-full'/>
                    <div className="">
                      <h1 className='text-white'>Bitcoin</h1>
                      <p className='text-zinc-400 text-xs'>CR4194244</p>
                    </div>
                  </div>
                  <div className=" text-white">
                    <h1>0.00000000 BTC</h1>
                  </div>
                </div>
                <div className="flex flex-row justify-between p-1">
                  <div className="flex flex-row items-center gap-2">
                    <img   src="https://www.creativefabrica.com/wp-content/uploads/2021/06/14/Cryptocurrency-Ethereum-Logo-Graphics-13394054-1.jpg" alt="Ethereum" className='h-5 w-5 rounded-full'/>
                    <div className="">
                      <h1 className='text-white'>Ethereum</h1>
                      <p className='text-zinc-400 text-xs'>CR6377404</p>
                    </div>
                  </div>
                  <div className=" text-white">
                    <h1>0.00000000 ETH</h1>
                  </div>
                </div>
                <div className="flex flex-row justify-between p-1">
                  <div className="flex flex-row items-center gap-2">
                    <img   src="https://logowik.com/content/uploads/images/t_litecoin-ltc-icon2338.logowik.com.webp" alt="Litecoin" className='h-5 w-5 rounded-full'/>
                    <div className="">
                      <h1 className='text-white'>Litecoin</h1>
                      <p className='text-zinc-400 text-xs'>CR6377401</p>
                    </div>
                  </div>
                  <div className=" text-white">
                    <h1>0.0000000 LTC</h1>
                  </div>
                </div>
                <div className="flex flex-row justify-between p-1">
                  <div className="flex flex-row items-center gap-2">
                    <img   src="https://w7.pngwing.com/pngs/113/18/png-transparent-tether-hd-logo-thumbnail.png" alt="Pound" className='h-5 w-5 rounded-full'/>
                    <div className="">
                      <h1 className='text-white'>Tether ERC20</h1>
                      <p className='text-zinc-400 text-xs'>CR458711</p>
                    </div>
                  </div>
                  <div className=" text-white">
                    <h1>0.00 eUSDT</h1>
                  </div>
                </div>
                <div className="flex flex-row justify-between p-1">
                  <div className="flex flex-row items-center gap-2">
                    <img   src="https://w7.pngwing.com/pngs/113/18/png-transparent-tether-hd-logo-thumbnail.png" alt="Pound" className='h-5 w-5 rounded-full'/>
                    <div className="">
                      <h1 className='text-white'>Tether TRC20</h1>
                      <p className='text-zinc-400 text-xs'>CR6377398</p>
                    </div>
                  </div>
                  <div className=" text-white">
                    <h1>0.00 tUSDT</h1>
                  </div>
                </div>
              </div>
              
            )}
            {activeTab === 'demo' && (
              <div className="">
              <div className="flex flex-row justify-between p-1">
                <div className="flex flex-row items-center gap-2">
                  <img   src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1200px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" alt="Pound" className='h-5 w-5 rounded-full'/>
                  <div className="">
                    <h1 className='text-white'>Pound Sterling</h1>
                    <p className='text-zinc-400 text-xs'>CR4168557</p>
                  </div>
                </div>
                <div className=" text-white">
                  <h1>0.00 GBP</h1>
                </div>
              </div>
              <div className="flex flex-row justify-between p-1">
                <div className="flex flex-row items-center gap-2">
                  <img   src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="Bitcoin" className='h-5 w-5 rounded-full'/>
                  <div className="">
                    <h1 className='text-white'>Bitcoin</h1>
                    <p className='text-zinc-400 text-xs'>CR4194244</p>
                  </div>
                </div>
                <div className=" text-white">
                  <h1>0.00000000 BTC</h1>
                </div>
              </div>
              <div className="flex flex-row justify-between p-1">
                <div className="flex flex-row items-center gap-2">
                  <img   src="https://www.creativefabrica.com/wp-content/uploads/2021/06/14/Cryptocurrency-Ethereum-Logo-Graphics-13394054-1.jpg" alt="Ethereum" className='h-5 w-5 rounded-full'/>
                  <div className="">
                    <h1 className='text-white'>Ethereum</h1>
                    <p className='text-zinc-400 text-xs'>CR6377404</p>
                  </div>
                </div>
                <div className=" text-white">
                  <h1>0.00000000 ETH</h1>
                </div>
              </div>
              <div className="flex flex-row justify-between p-1">
                <div className="flex flex-row items-center gap-2">
                  <img   src="https://logowik.com/content/uploads/images/t_litecoin-ltc-icon2338.logowik.com.webp" alt="Litecoin" className='h-5 w-5 rounded-full'/>
                  <div className="">
                    <h1 className='text-white'>Litecoin</h1>
                    <p className='text-zinc-400 text-xs'>CR6377401</p>
                  </div>
                </div>
                <div className=" text-white">
                  <h1>0.0000000 LTC</h1>
                </div>
              </div>
              <div className="flex flex-row justify-between p-1">
                <div className="flex flex-row items-center gap-2">
                  <img   src="https://w7.pngwing.com/pngs/113/18/png-transparent-tether-hd-logo-thumbnail.png" alt="Pound" className='h-5 w-5 rounded-full'/>
                  <div className="">
                    <h1 className='text-white'>Tether ERC20</h1>
                    <p className='text-zinc-400 text-xs'>CR458711</p>
                  </div>
                </div>
                <div className=" text-white">
                  <h1>0.00 eUSDT</h1>
                </div>
              </div>
              <div className="flex flex-row justify-between p-1">
                <div className="flex flex-row items-center gap-2">
                  <img   src="https://w7.pngwing.com/pngs/113/18/png-transparent-tether-hd-logo-thumbnail.png" alt="Pound" className='h-5 w-5 rounded-full'/>
                  <div className="">
                    <h1 className='text-white'>Tether TRC20</h1>
                    <p className='text-zinc-400 text-xs'>CR6377398</p>
                  </div>
                </div>
                <div className=" text-white">
                  <h1>0.00 tUSDT</h1>
                </div>
              </div>
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

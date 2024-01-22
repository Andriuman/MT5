import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Accordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="bg-zinc-900 text-white w-full rounded-lg">
      {/* Section 1 */}
      <div className="border-b border-zinc-950">
        <button
          className="flex justify-between items-center w-full p-4 focus:outline-none"
          onClick={() => toggleSection(1)}
        >
          Datos personales
          <FontAwesomeIcon 
            icon={faBell} 
            className={`h-4 w-4 transform ${openSection === 1 ? 'rotate-180' : ''} transition-transform`}
          />
        </button>
        <Transition
          show={openSection === 1}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="pb-4 px-4">
            <p>Contenido de Datos personales</p>
          </div>
        </Transition>
      </div>

      {/* Section 2 */}
      <div className="border-b border-zinc-950">
        <button
          className="flex justify-between items-center w-full p-4 focus:outline-none"
          onClick={() => toggleSection(2)}
        >
          Idiomas
          <FontAwesomeIcon 
            icon={faBell} 
            className={`h-4 w-4 transform ${openSection === 2 ? 'rotate-180' : ''} transition-transform`}
          />
        </button>
        <Transition
          show={openSection === 2}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="pb-4 px-4">
            <p>Contenido de Idiomas</p>
          </div>
        </Transition>
      </div>

      {/* Section 3 */}
      <div className="border-b border-zinc-950">
        <button
          className="flex justify-between items-center w-full p-4 focus:outline-none"
          onClick={() => toggleSection(3)}
        >
          Evaluaciones
          <FontAwesomeIcon 
            icon={faBell} 
            className={`h-4 w-4 transform ${openSection === 3 ? 'rotate-180' : ''} transition-transform`}
          />
        </button>
        <Transition
          show={openSection === 3}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="pb-4 px-4">
            <p>Contenido de Evaluaciones</p>
          </div>
        </Transition>
      </div>

      {/* Section 4 */}
      <div className="rounded-b-lg">
        <button
          className="flex justify-between items-center w-full p-4 focus:outline-none"
          onClick={() => toggleSection(4)}
        >
          Seguridad y privacidad
          <FontAwesomeIcon 
            icon={faBell} 
            className={`h-4 w-4 transform ${openSection === 4 ? 'rotate-180' : ''} transition-transform`}
          />
        </button>
        <Transition
          show={openSection === 4}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="pb-4 px-4">
            <p>Contenido de Seguridad y privacidad</p>
          </div>
        </Transition>

      {/* Section 1 */}
      <div className="border-b border-zinc-950">
        <button
          className="flex justify-between items-center w-full p-4 focus:outline-none"
          onClick={() => toggleSection(1)}
        >
          Datos personales
          <FontAwesomeIcon 
            icon={faBell} 
            className={`h-4 w-4 transform ${openSection === 1 ? 'rotate-180' : ''} transition-transform`}
          />
        </button>
        <Transition
          show={openSection === 1}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="pb-4 px-4">
            <p>Contenido de Datos personales</p>
          </div>
        </Transition>
      </div>


      {/* Section 1 */}
      <div className="border-b border-zinc-950">
        <button
          className="flex justify-between items-center w-full p-4 focus:outline-none"
          onClick={() => toggleSection(1)}
        >
          Datos personales
          <FontAwesomeIcon 
            icon={faBell} 
            className={`h-4 w-4 transform ${openSection === 1 ? 'rotate-180' : ''} transition-transform`}
          />
        </button>
        <Transition
          show={openSection === 1}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="pb-4 px-4">
            <p>Contenido de Datos personales</p>
          </div>
        </Transition>
      </div>




      </div>
    </div>
  );
};

export default Accordion;

import React, { useState } from 'react';

const Formulario1 = () => {
  const [formDetails, setFormDetails] = useState({
    nombre: '',
    apellido: '',
    lugarNacimiento: '',
    fechaNacimiento: '',
    nacionalidad: '',
    paisResidencia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails);
    // Aquí podrías hacer algo con los datos del formulario, como enviarlos a un servidor
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-950 p-6 rounded-lg">
      <h2 className="text-white text-lg mb-6">Detalles</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="nombre"
          value={formDetails.nombre}
          onChange={handleChange}
          placeholder="Nombre*"
          className="bg-zinc-900 text-white p-2 rounded-md"
        />
        <input
          type="text"
          name="apellido"
          value={formDetails.apellido}
          onChange={handleChange}
          placeholder="Apellido*"
          className="bg-zinc-900 text-white p-2 rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <select
          name="lugarNacimiento"
          value={formDetails.lugarNacimiento}
          onChange={handleChange}
          className="bg-zinc-900 text-white p-2 rounded-md"
        >
          <option value="">Lugar de nacimiento</option>
          {/* Añade opciones aquí */}
        </select>
        <input
          type="date"
          name="fechaNacimiento"
          value={formDetails.fechaNacimiento}
          onChange={handleChange}
          className="bg-zinc-900 text-white p-2 rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <select
          name="nacionalidad"
          value={formDetails.nacionalidad}
          onChange={handleChange}
          className="bg-zinc-900 text-white p-2 rounded-md"
        >
          <option value="">Nacionalidad</option>
          {/* Añade opciones aquí */}
        </select>
        <select
          name="paisResidencia"
          value={formDetails.paisResidencia}
          onChange={handleChange}
          className="bg-zinc-900 text-white p-2 rounded-md"
        >
          <option value="">País de residencia*</option>
          {/* Añade opciones aquí */}
        </select>
      </div>
      
    </form>
  );
};

export default Formulario1;

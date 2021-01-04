import React, { Fragment, useState } from "react";
import { v4 as uuid } from 'uuid';

const Formulario = () => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  const HandleChange = (e) => {
    actualizarCita({ ...cita, [e.target.name]: e.target.value });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    let validForm = true;
    Object.keys(cita).some(
      (data) => cita[data].trim() === "" && (validForm = false)
    );
    if (!validForm) {
      actualizarError(true);
      return;
    } 

    actualizarError(false);

    //Asignar un ID
    cita.id = uuid();

    console.log(cita);

  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error && (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      )}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          placeholder="Nombre de la Mascota"
          className="u-full-width"
          onChange={HandleChange}
          value={mascota}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          placeholder="Nombre del Dueño"
          className="u-full-width"
          onChange={HandleChange}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={HandleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={HandleChange}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={HandleChange}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;

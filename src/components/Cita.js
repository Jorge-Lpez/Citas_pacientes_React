import React from 'react';


const Cita = ({cita, eliminarCita}) => (
        <div className="cita">
            <p>Mascota: {cita.mascota} <span></span></p>
            <p>Dueño: {cita.propietario} <span></span></p>
            <p>Fecha: {cita.fecha} <span></span></p>
            <p>hora: {cita.hora} <span></span></p>
            <p>sintomas: {cita.sintomas} <span></span></p>

            <button 
            className="button eliminar u-full-width"
            onClick={()=>eliminarCita(cita.id)}>
                Eliminar
            </button>

        </div>
);
 
export default Cita;
import React, {Fragment, useState} from 'react';
import { v4 as uuidv4} from "uuid";


const Formulario = ({crearcita}) => {

    const [cita, actualizarcita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas:""
    });

    //Funcion que se utiliza cada que el usuario escribe algo en el formulario
    const actualizarState = e => {
        actualizarcita({
            ...cita,
            [e.target.name]: [e.target.value]
        });
    }

    //State de error

    const[error, actualizarerror] = useState(false);


    //Estraer valores del state objeto 

    const {mascota, propietario, fecha, hora, sintomas} = cita;


    //Crear cita o enviar cita

    const enviarcita = e => {
        e.preventDefault();


        //validar
        if(mascota === "" || propietario ==="" || fecha ==="" || hora === "" || sintomas ===""){
            actualizarerror(true);
            return;
        }

        actualizarerror(false);

        // crear id 
        cita.id = uuidv4();

        //crearla cita
        
        crearcita(cita);


        //reiniciar el form

        actualizarcita({
            mascota: "",
            propietario: "",
            fecha: "",
            hora: "",
            sintomas:""
        });

    }



    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {
            error
            ?
            <p className="alerta-error">Error en el formulario</p>
            :
            null
            }


            <form 
            onSubmit={enviarcita}>
                <label>Nombre Mascota</label>
                <input 
                    value ={mascota}
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder ="Nombre Mascota"
                    onChange ={actualizarState}
                />


                <label>Nombre Dueño</label>
                <input 
                    value ={propietario}
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder ="Nombre del dueño de lña mascota"
                    onChange ={actualizarState}
                />

                <label>Fecha alta</label>
                <input 
                    value ={fecha}
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange ={actualizarState}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    value ={hora}
                    className="u-full-width"
                    onChange ={actualizarState}
                />

                <label>Sintomas</label>
                <textarea
                    value ={sintomas}
                    className="u-full-width"
                    name="sintomas"
                    onChange ={actualizarState}
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita
                </button>

            </form>
        </Fragment>
    );
}
 
export default Formulario;
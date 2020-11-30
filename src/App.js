import React, {Fragment, useState, useEffect} from 'react';
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  let citasstorega =  JSON.parse(localStorage.getItem("citas"));
  if(!citasstorega){
      citasstorega =[];
  }

  const [citas, guardarCita] = useState(citasstorega);

  //Funcion  que tome las citas acutales y agregue la nueva
  const crearcita = cita =>{
    guardarCita([
      ...citas,
      cita
    ]);
  }


  //Funcion useEffect que sirve para ejecutarse cada que el navegador se actualiza
  useEffect(()=>{
      if(citasstorega){
          localStorage.setItem("citas", JSON.stringify(citas));
      }else{
          localStorage.setItem("citas", JSON.stringify([]));
      }
  },[citas, citasstorega]);


  //Funcion que elimina una cita por su id
  const eliminarCita = (id)=>{
        //console.log(id);
        const nuevoscitas = citas.filter(cita => cita.id !== id);
        guardarCita(nuevoscitas);
  }


  //Ternario que decide el titulo del administrar citas
  const titulo= citas.length === 0 ? "No hay citas" : "Administrar citas"

  return (
    <Fragment>
       <h1>Administrador de citas</h1>

       <div className="container">
            <div className="row">
              <div className="one-half column">
                  <Formulario
                     crearcita= {crearcita}
                  />
              </div>
              <div className="one-half column">
                  <h2>{titulo}</h2>
                  {citas.map(cita=>(
                    <Cita
                        key= {cita.id}
                        cita = {cita}
                        eliminarCita = {eliminarCita}
                    />
                  ))}
              </div>
            </div>
       </div>
    </Fragment>
  );
}

export default App;

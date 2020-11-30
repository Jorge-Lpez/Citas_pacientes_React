import React from 'react';
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Formulario from "../components/Formulario";
import "@testing-library/jest-dom/extend-expect";

    //Funciones spay 
    const crearcita = jest.fn();

    //Limpiatr despues de cada pruebas los render para mejorar 
    afterEach( cleanup );


    test(`<Formulario /> Cargar el formulario y revisar que todo sea correcto`, () => {
    //const wrapper = render(<Formulario />);
    // wrapper.debug();

    render(<Formulario crearcita={crearcita} />);
    expect( screen.getByText("Crear Cita")).toBeInTheDocument();
    

    //Heading
    const titulo = screen.getByTestId(`titulo`);
    //expect( screen.getByTestId("titulo").tagName).toBe("h2");
    expect( titulo.tagName).not.toBe("h1");
    expect( screen.getByTestId("titulo").textContent ).toBe("Crear Cita");
    //expect( screen.getByTestId("titulo").tagName ).not.toBe("h2");

    //Boton de submit
    expect( screen.getByTestId("btn-submit").tagName ).toBe("BUTTON");
    expect( screen.getByTestId("btn-submit").textContent ).toBe("Agregar Cita");
    expect( screen.getByTestId("btn-submit").textContent ).not.toBe("Agregar nueva Cita");

    //Probando funciones, submit de formulario y validacion

});


test(`<Formulario /> Validacion de formulario`, () => {
    render(<Formulario crearcita={crearcita} />);

    //Verificar formulario
    const btnSubmit = screen.getByTestId("btn-submit");
    fireEvent.click(btnSubmit);

    // Revisar por la alerta 
    const alerta = screen.getByTestId(`alerta`)
    expect( alerta ).toBeInTheDocument();
    expect( alerta.textContent ).toBe("Error en el formulario");
    expect( alerta.tagName ).toBe("P");
    expect( alerta.tagName ).not.toBe("BUTTON");
});
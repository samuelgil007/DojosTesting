/// <reference types="cypress" />

describe("Validaciones a los campos", () => {
    it("llenar formulario y crear", () => {

        //Se le dice a cypress que pagina visitar
        cy.visit("/index.html");

        cy.get('[data-cy="nombreMascota-input"]')
            .type('Rayo perro');

        //Llena el campo
        cy.get('[data-cy="nombrePropietario-input"]')
            .type('Rayo dueño');

        cy.get('[data-cy="telefono-input"]')
            .type('1231231');

        cy.get('[data-cy="fecha-input"]')
            .type('2021-06-20');

        //Si colocamos algo incorrecto, cypress nos dice cual es el formato correcto: HH:mm:ss.SSS
        cy.get('[data-cy="hora-input"]')
            .type('20:10');

        cy.get('[data-cy="sintomas-input"]')
            .type('Dolor en...');

        /* Importante el orden: despues de que se llenaron todos los campos se le da click en submit, lo que hace
        que agrege los datos */
        cy.get('[data-cy="submit-cita"]')
            .click();

        //Verificar si el citas-heading tiene este texto 
        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', "Administra tus Citas");

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', "Se agregó correctamente");

        //Verificar si tiene una clase
        cy.get('[data-cy="alerta"]')
            .should('have.class', "alert-success");

    });
    it("Validar editar", () => {

        /* No vvisitarla de nuevo porque es como si recargara
        cy.visit("/index.html"); */

        cy.get('[data-cy="btn-editar"]')
            .click();

        //Limpia el campo y reescribe
        cy.get('[data-cy="nombreMascota-input"]')
            .clear()
            .type('Rayo perro editado');

        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', "Guardado Correctamente");

    })
})

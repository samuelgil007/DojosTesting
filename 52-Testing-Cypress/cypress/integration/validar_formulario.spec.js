/// <reference types="cypress" />

describe("Validaciones", () => {
    it("Submit al formulario y mostrar error", () => {

        //Se le dice a cypress que pagina visitar
        cy.visit("/index.html")

        cy.get('[data-cy="formulario"]').submit();

        //seleccionar la alerta, invoca el texto y verifica si es igual
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', "Todos los campos son Obligatorios");

        //Verificar si tiene una clase
        cy.get('[data-cy="alerta"]')
            .should('have.class', "alert-danger");
    })

})

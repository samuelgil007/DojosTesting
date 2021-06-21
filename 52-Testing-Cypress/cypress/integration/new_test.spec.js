/// <reference types="cypress" />

describe("Cargar pagina", () => {
    it("Cargar pagina principal", () => {

        //Se le dice a cypress que pagina visitar
        cy.visit("/index.html")

        //Verificar que exista (con buenas practicas)
        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        //Verificar que exista y contenga texto
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', "Administrador de Pacientes de Veterinaria");

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', "No hay Citas, comienza creando una");

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('not.equal', "No hay, comienza creando una");

    })

})

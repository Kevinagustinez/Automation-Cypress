const { Context } = require("mocha");

describe("US: Verificar elementos agregados en el input.", () => {
    beforeEach("Precondición : Ingresar a la pagina TODOMVC", () => {
    cy.visit("https://todomvc-app-for-testing.surge.sh/");
    cy.url().should("contain", "todomvc")
});

    it("US - TC#1 : Ingresar un dato en el Input Field",()=>{
        cy.get("[type='text']").type('Hola Mundo{enter}')
        cy.get('ul.todo-list').should('be.visible')
        cy.get(".toggle[type='checkbox']").click()
        cy.get("button.clear-completed").should('contain','Clear completed')
    });
});

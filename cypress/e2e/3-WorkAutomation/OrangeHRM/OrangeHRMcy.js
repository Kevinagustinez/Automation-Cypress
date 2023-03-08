describe("US-3 | Administrar Usuarios (ESS) en el sistema de gestión de una empresa de forma básica",()=>{
    
  beforeEach("Precondicion: Iniciar sesion con los datos de la pagina de inicio y situarse en el modulo PIM",()=> {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('ad');
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
      cy.get('.oxd-button').click();
      cy.get(':nth-child(2) > .oxd-main-menu-item').click();
    });

    it("US-3 | TC#01 : Administrador incorpora un nuevo usuario (ESS) al sistema de gestión", () => {
      cy.get('.orangehrm-header-container > .oxd-button').click();
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear('K');
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Kevin');
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear();
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Agustinez');
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').click();
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').click();
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').click();
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear('I');
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Ivan');
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear();
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Agustinez');
      cy.get('.oxd-file-div > .oxd-icon-button').click();
      cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click();
      cy.get('.oxd-button--secondary').click();
    });

    it("US-3 | TC#02 : Administrador busca el perfil de un empleado", () => {
      
    });

    it("US-3 | TC#03 : Administrador elimina el perfil de un empleado", () => {
        
    });

    it("US-3 | TC#04 : Administrador edita el perfil de un empleado", () => {
        
    });

})

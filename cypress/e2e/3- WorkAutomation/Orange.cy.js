describe('US - 9 : OrangeHRM (Web) | PIM | Administrar Usuarios (ESS) en el sistema de gestión de una empresa de forma básica',function(){
    
        beforeEach("Usuario debe iniciar sesion y situarse en el modulo PIM",function(){
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.url().should('include', 'auth/login')
            cy.get('[name="username"]').type('Admin')
            cy.get('[name="password"]').type('admin123')
            cy.get('[type="submit"]').click()
            cy.url().should('contain','/dashboard/index')
            cy.get(".oxd-main-menu a").eq(1).click()
            cy.url().should('contain','pim/viewEmployeeList')
        })

describe('US - 9 ')

        it('US-9 | TC#1 : Administrador incorpora un nuevo usuario (ESS) al sistema de gestión.',function(){
            cy.get(".orangehrm-header-container [type='button']").click()
        })

});
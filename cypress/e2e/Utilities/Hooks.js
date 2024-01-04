
import HomePage from "C:/Users/azouaghi/Documents/CypressProjects/CypressCucumberPMO/cypress/pages/HomePage.js";
import Login from "C:/Users/azouaghi/Documents/CypressProjects/CypressCucumberPMO/cypress/pages/Login.js";


const home = new HomePage()
const log = new Login()

describe('Cypress Hooks', function() {
    before(function() {
       // executes once prior all tests in it block
       cy.log("Before hook")
   

cy.reload() //reload HomePage
        })

    beforeEach(function() {
        home.visit()

        // executes prior each test within it block
        log.EmailField('standard_user')
       log.PasswordField('secret_sauce') 
    
        cy.wait(1000)

        cy.log("BeforeEach hook")
     })


    after(function() {
       // executes once post all tests in it block

       log.LoginButton().should('be.visible')
       cy.log("After hook")
    })
    

    afterEach(function() {
       // executes post each test within it block
      
       cy.log("AfterEac hook")

       cy.url().should('include', '/v1/index.html') //assert URL HomePage
    })


    it('First Test', function() {

     log.LoginButton().click()
     cy.wait(2000)
     home.ClickMyAccount().click()<
     log.ClickLogout().click()

       cy.log("First Test")
    })


    it('Second Test', function() {
       cy.log("Second Test")
       cy.wait(2000)
       log.LoginButton().click()
       home.ClickMyAccount().click()
       log.ClickLogout().click()
    })
 })


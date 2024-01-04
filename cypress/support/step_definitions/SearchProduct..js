import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
 
Given("the user test", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});
 
When("the userrr enters {string} and {string}", (username, password) => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password);
});
 
When("the userr clicks on login button", () => {
    cy.get('.oxd-button').click();
});
 
 
Then("the userrr is on the dashboard page", () => {
    // Ajoutez ici vos vérifications pour confirmer que l'utilisateur est sur la page du tableau de bord
});
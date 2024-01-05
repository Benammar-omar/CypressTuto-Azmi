
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


import HomePage from "../../pages/HomePage";
import Login from "../../pages/Login";

const home = new HomePage()
const log = new Login()

Given("the user is on the home page", () => {
  home.visit()
  cy.wait(1000)
});

When("the user enters {string} and {string}", (username, password) => {
  log.EmailField(username)
  log.PasswordField(password)
});

When("the user clicks on login button", () => {

  log.LoginButton().click()
});

Then("the user is on the dashboard page", () => {

  home.ClickMyAccount().click()
  cy.wait(1000)
  log.ClickLogout().click()
});




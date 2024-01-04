class HomePage {
  constructor() {
    // Affichage du chemin vers la page d'accueil lors de la création de l'objet HomePage
    console.log("Chemin vers la page d'accueil :", "https://www.saucedemo.com/v1/index.html");
  }

  visit() {
    cy.visit("https://www.saucedemo.com/v1/index.html");
  }

  ClickMyAccount() {
    return cy.get('.bm-burger-button > button');
  }
}

export default HomePage;

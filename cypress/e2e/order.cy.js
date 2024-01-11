describe("Burger ordering process", () => {
  it("Burger of my Dreams order", () => {
    cy.visit("https://wolt.com/en/ltu");
    cy.clearAllCookies();

    // Accept cookie consent
    cy.get('[data-localization-key="gdpr-consents.banner.accept-button"]')
      .should("be.visible")
      .contains("Accept")
      .click({ force: true });

    // Select delivery address
    cy.get('input[data-test-id="address-picker-input.input"]')
      .should("exist")
      .click()
      .type("Kauno dokas");
    cy.contains("Kauno Dokas").should("exist").click();

    // Search for and select a restaurant
    cy.get('[placeholder="Search in Wolt..."]')
      .should("exist")
      .and("have.value", "")
      .type("Baking Mad Hidden Lab{enter}");
    cy.contains("Baking Mad Hidden Lab").should("exist").click();
    cy.contains("Special Heisenberg").should("exist").click();

    // Customize the order
    cy.contains("label", "Traškios BM Magic bulvytės")
      .find('input[type="radio"]')
      .check({ force: true })
      .should("be.checked");

    cy.contains("label", "Organiška pakuotė")
      .find('input[type="radio"]')
      .check({ force: true })
      .should("be.checked");

    cy.get('[type="checkbox"]').uncheck({ force: true });
    cy.contains("label", "Papildomas sūris")
      .find('input[type="checkbox"]')
      .check({ force: true })
      .should("be.checked");

    cy.contains("label", "Pepsi")
      .find('input[type="checkbox"]')
      .check({ force: true })
      .should("be.checked");

    // Add items to the order
    cy.contains("Add to order").should("exist").click();

     // View the order
    cy.contains("View order").should("exist").click();

    //Verify the order details
    cy.contains("Your order").should("be.visible");
    cy.contains("Special Heisenberg").should("be.visible");
    cy.contains("Papildomas sūris").should("be.visible");
    cy.contains("Pepsi").should("be.visible");
    cy.contains('Organiška pakuotė').should('be.visible');

      // Go to checkout
    cy.contains("Go to checkout").should("exist").click();
  });
});


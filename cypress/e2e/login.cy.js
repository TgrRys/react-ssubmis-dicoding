describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });

  it("should display signIn page correctly", () => {
    cy.visit("http://localhost:5173/signIn");

    cy.get('input[placeholder="Email"]').should("be.visible");
    cy.get('input[placeholder="Password"]').should("be.visible");
    cy.get("button")
      .contains(/^Login$/)
      .should("be.visible");
  });

  it("should display alert when email is empty", () => {
    cy.visit("http://localhost:5173/signIn");

    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it("should display alert when password is empty", () => {
    cy.visit("http://localhost:5173/signIn");

    cy.get('input[placeholder="Email"]').type("testuser@gmail.com");
    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it("should display alert when email and password are wrong", () => {
    cy.visit("http://localhost:5173/signIn");
    cy.get('input[placeholder="Email"]').type("testuser@gmail.com");

    cy.get('input[placeholder="Password"]').type("wrong_password");

    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("email or password is wrong");
    });
  });

  it("should display homepage when email and password are correct", () => {
    cy.visit("http://localhost:5173/signIn");
    cy.get('input[placeholder="Email"]').type("tgrrys@gmail.com");
    cy.get('input[placeholder="Password"]').type("tes123");

    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.get("nav")
      .contains(/^Threads$/)
      .should("be.visible");
    cy.get("button")
      .contains("Sign out")
      .should("be.visible", { timeout: 10000 });
  });

  it("should display register page correctly", () => {
    cy.visit("http://localhost:5173/signUp");

    cy.get('input[placeholder="Name"]').should("be.visible");
    cy.get('input[placeholder="Email"]').should("be.visible");
    cy.get('input[placeholder="Password"]').should("be.visible");
    cy.get("button")
      .contains(/^Register$/)
      .should("be.visible");
  });
});

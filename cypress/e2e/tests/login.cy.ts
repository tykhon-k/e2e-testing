import { getUserData } from "@/support/utils";

import LoginPageObject from "../pom/login.pom";
import LoginPageAssertions from "../assertions/login.assertions";
import InventoryPageAssertions from "../assertions/inventory.assertions";

const loginPage = new LoginPageObject();
const loginPageAssertions = new LoginPageAssertions();
const inventoryPageAssertions = new InventoryPageAssertions();

import { errorMessages } from "../helpers/error.messages";

describe("Login", () => {
  beforeEach(() => {
    Cypress.session.clearAllSavedSessions();
    loginPage.visit();
  });

  describe("Successful login", () => {
    it("should successfully login user with valid credentials", () => {
      cy.performLogin("standard_user");
      inventoryPageAssertions.assertPageIsVisible();
    });
  });

  describe("Failed logins", () => {
    it("should fail to login 'locked_out_user' and show error message", () => {
      cy.performLogin("locked_out_user");
      loginPageAssertions.assertLoginError(errorMessages.login.lockedOutUser);
    });

    it("should show error message for invalid password", () => {
      cy.performLogin("standard_user", "wrong_password");
      loginPageAssertions.assertLoginError(errorMessages.login.doNotMatch);
    });

    it("should show error message for empty username", () => {
      getUserData("standard_user").then((user) => {
        loginPage.typePassword(user.password!);
      });
      loginPage.clickLoginButton();
      loginPageAssertions.assertLoginError(
        errorMessages.login.usernameRequired
      );
    });

    it("should show error message for empty password", () => {
      getUserData("standard_user").then((user) => {
        loginPage.typeUsername(user.name);
      });
      loginPage.clickLoginButton();
      loginPageAssertions.assertLoginError(
        errorMessages.login.passwordRequired
      );
    });
  });
});

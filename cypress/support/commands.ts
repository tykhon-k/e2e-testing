import { loginSelectors } from "@/selectors/login.selectors";
import { getUserData } from "./utils";

Cypress.Commands.add("findByDataTest", (selector) => {
  cy.get(`[data-test='${selector}']`);
});

Cypress.Commands.add(
  "performLogin",
  (userKey: string, passwordOverride?: string) => {
    getUserData(userKey).then((user) => {
      cy.findByDataTest(loginSelectors.inputs.username).type(user.username);
      if (passwordOverride) {
        cy.findByDataTest(loginSelectors.inputs.password).type(
          passwordOverride
        );
      } else {
        cy.findByDataTest(loginSelectors.inputs.password).type(user.password!);
      }
      cy.findByDataTest(loginSelectors.buttons.login).click();
    });
  }
);

import { loginSelectors } from "../../selectors/login.selectors";
import { paths } from "../../support/paths";

class LoginPageObject {
  visit() {
    cy.visit(paths.login);
  }

  typeUsername(username: string) {
    cy.findByDataTest(loginSelectors.inputs.username).type(username);
  }

  typePassword(password: string) {
    cy.findByDataTest(loginSelectors.inputs.password).type(password);
  }

  clickLoginButton() {
    cy.findByDataTest(loginSelectors.buttons.login).click();
  }
}

export default LoginPageObject;

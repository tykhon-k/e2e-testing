import { loginSelectors } from "@/selectors/login.selectors";

class LoginPageAssertions {
  assertLoginError(errorMessage: string) {
    cy.findByDataTest(loginSelectors.errorMessage).should(
      "be.visible",
      "contain.text",
      errorMessage
    );
  }
}

export default LoginPageAssertions;

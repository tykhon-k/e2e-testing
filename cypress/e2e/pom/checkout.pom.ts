import { checkoutSelectors } from "@/selectors/checkout.selectors";

class CheckoutPageObject {
  typeFirstName(firstName: string) {
    cy.findByDataTest(checkoutSelectors.stepOne.firstName).type(firstName);
  }

  typeLastName(lastName: string) {
    cy.findByDataTest(checkoutSelectors.stepOne.lastName).type(lastName);
  }

  typePostalCode(postalCode: string) {
    cy.findByDataTest(checkoutSelectors.stepOne.postalCode).type(postalCode);
  }

  clickContinueButton() {
    cy.findByDataTest(checkoutSelectors.stepOne.continueButton).click();
  }

  clickFinishButton() {
    cy.findByDataTest(checkoutSelectors.stepTwo.finishButton).click();
  }
}

export default CheckoutPageObject;

import { checkoutSelectors } from "@/selectors/checkout.selectors";

class CheckoutPageAssertions {
  assertOrderHasBeenPlaced(headerText: string, messageText: string) {
    cy.findByDataTest(checkoutSelectors.complete.container)
      .should("be.visible")
      .within(() => {
        cy.findByDataTest(checkoutSelectors.complete.header).should(
          "contain",
          headerText
        );
        cy.findByDataTest(checkoutSelectors.complete.text).should(
          "contain",
          messageText
        );
      });
  }
}

export default CheckoutPageAssertions;

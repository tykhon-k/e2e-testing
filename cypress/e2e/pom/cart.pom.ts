import { cartSelectors } from "@/selectors/cart.selectors";

class CartPageObject {
  clickCheckoutButton() {
    cy.findByDataTest(cartSelectors.checkoutButton).click();
  }
}

export default CartPageObject;

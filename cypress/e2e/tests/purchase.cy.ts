import { getUserData } from "@/support/utils";
import { paths } from "@/support/paths";
import { inventoryItemIndex } from "../helpers/enums";
import { itemNames } from "../helpers/item.names";
import { successMessages } from "../helpers/success.messages";

import LoginPageObject from "../pom/login.pom";
import InventoryPageObject from "../pom/inventory.pom";
import CartPageObject from "../pom/cart.pom";
import CheckoutPageObject from "../pom/checkout.pom";

import CartPageAssertions from "../assertions/cart.assertions";
import CheckoutPageAssertions from "../assertions/checkout.assertions";

const loginPage = new LoginPageObject();
const inventoryPage = new InventoryPageObject();
const cartPage = new CartPageObject();
const checkoutPage = new CheckoutPageObject();

const cartPageAssertions = new CartPageAssertions();
const checkoutPageAssertions = new CheckoutPageAssertions();

describe("Purchase flow", () => {
  before(() => {
    // Performing UI login once, as there are no available API endpoints for programmatic login.
    Cypress.session.clearAllSavedSessions();
    loginPage.visit();
    cy.performLogin("standard_user");
    cy.url().should("include", paths.inventory);
  });

  it("should allow to purchase an item", () => {
    inventoryPage.addItemToCart(
      inventoryItemIndex.BIKE_LIGHT,
      itemNames.BIKE_LIGHT
    );
    inventoryPage.goToCart();
    cartPageAssertions.assertRightItemInCart(itemNames.BIKE_LIGHT);
    cartPage.clickCheckoutButton();
    getUserData("standard_user").then((user) => {
      checkoutPage.typeFirstName(user.name);
      checkoutPage.typeLastName(user.name);
      checkoutPage.typePostalCode(user.postalCode!);
    });
    checkoutPage.clickContinueButton();
    checkoutPage.clickFinishButton();
    checkoutPageAssertions.assertOrderHasBeenPlaced(
      successMessages.completedCheckout.header,
      successMessages.completedCheckout.message
    );
  });
});

import { titleCaseItemName } from "@/support/utils";
import { inventorySelectors } from "@/selectors/inventory.selectors";

class CartPageAssertions {
  assertRightItemInCart(itemName: string) {
    cy.findByDataTest(inventorySelectors.inventory.item)
      .should("be.visible")
      .within(() => {
        cy.findByDataTest(inventorySelectors.inventory.itemName).should(
          "contain",
          titleCaseItemName(itemName)
        );
      });
  }
}

export default CartPageAssertions;

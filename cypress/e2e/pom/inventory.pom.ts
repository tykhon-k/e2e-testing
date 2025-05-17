import { inventorySelectors } from "@/selectors/inventory.selectors";
import { titleCaseItemName } from "@/support/utils";

class InventoryPageObject {
  addItemToCart(itemIndex: number, itemName: string) {
    cy.findByDataTest(`item-${itemIndex}-title-link`).should(
      "contain",
      titleCaseItemName(itemName)
    );
    cy.findByDataTest(
      `${inventorySelectors.inventory.addToCartButton}${itemName}`
    ).click();
  }

  goToCart() {
    cy.findByDataTest(inventorySelectors.header.cartButtonLink).click();
  }
}

export default InventoryPageObject;

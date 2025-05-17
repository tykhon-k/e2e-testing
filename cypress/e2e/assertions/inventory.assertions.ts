import { paths } from "@/support/paths";
import { inventorySelectors } from "../../selectors/inventory.selectors";

class InventoryPageAssertions {
  assertPageIsVisible() {
    cy.get(inventorySelectors.inventory.container).should("be.visible");
    cy.url().should("include", paths.inventory);
  }
}

export default InventoryPageAssertions;

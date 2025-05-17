export const getUserData = (
  userName: string
): Cypress.Chainable<Cypress.User> => {
  return cy.fixture("users.json").then((users: Cypress.User[]) => {
    const foundUser = users.find((user) => user.name === userName);
    return foundUser;
  });
};

export const titleCaseItemName = (itemName: string) => {
  return itemName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

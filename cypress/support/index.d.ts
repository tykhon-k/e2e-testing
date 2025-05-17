declare namespace Cypress {
  interface Chainable<Subject = any> {
    getUserData(): Chainable<User>;
    findByDataTest(selector: string): Chainable<JQuery<HTMLElement>>;
    performLogin(
      userKey: string,
      passwordOverride?: string
    ): Chainable<JQuery<HTMLElement>>;
  }

  interface User {
    name: string;
    username: string;
    password?: string;
    postalCode?: string;
  }
}

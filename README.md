# E2E Testing

[![CI status](https://github.com/tykhon-k/e2e-testing/actions/workflows/ci.yml/badge.svg)](https://github.com/tykhon-k/e2e-testing/actions/workflows/ci.yml)

I built this project from scratch in just a few hours to demonstrate my ability to design and implement a **scalable end-to-end automation framework** using **Cypress** and **TypeScript**.

My main goal was to create a **robust technical foundation** — clean, modular, and extensible — that reflects how a real-world UI automation system should be built in a collaborative engineering environment.

## ✨ Features

- **Cypress:** Fast, easy, and reliable testing for anything that runs in a browser.
- **TypeScript:** Strong typing for robust and maintainable test code.
- **Page Object Model (POM):** Clear separation of page-specific logic in `cypress/e2e/pom/`.
- **Custom Commands:**
  - `cy.findByDataTest(selector)`: Utility for concise selection of elements using `data-test` attributes.
  - `cy.performLogin(userKey, passwordOverride?)`: Efficiently logs in users by fetching credentials and handling UI interaction, with optional password override.
- **Centralized Selectors:** Organized element selectors in `cypress/selectors/`.
- **Dedicated Assertion Classes:** Reusable and focused assertions in `cypress/e2e/assertions/`.
- **Helper Utilities:** Shared functions and constants (e.g., `error.messages.ts`, `paths.ts`, `utils.ts`) in `cypress/support/` and `cypress/e2e/helpers/`.
- **Fixtures:** Managing test data (e.g., user credentials) in `cypress/fixtures/users.json`.
- **GitHub Actions CI:** Manually triggered test execution via the GitHub Actions interface.
- **Professional Structure:** Well-organized project layout for clarity, maintainability, and scalability.
- **Detailed Reporting:** Screenshots on failure via GitHub Actions artifacts. Video recording is disabled by default but can be enabled.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 18.x or 20.x recommended)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/)

### Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/tykhon-k/e2e-testing
    cd e2e-testing
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or if you prefer yarn:
    ```bash
    yarn install
    ```

### Running Tests Locally

#### Cypress Test Runner (Interactive Mode)

For writing, debugging, and running tests interactively:

```bash
npm run cypress:open
```

#### Headless Mode (CLI)

To run all tests headlessly in the default browser (Electron), similar to how they might run in a CI environment:

```bash
npm run cypress:cli
```

To run a specific spec file headlessly, for example:

```bash
npm run cypress:cli:spec "cypress/e2e/tests/your_spec_file.cy.ts"
```

(Note: The `package.json` scripts provide convenient ways to run tests. For more specific browser choices or other options not covered by these scripts, you can run `npx cypress run` with specific flags directly, e.g., `npx cypress run --browser chrome`.)

## 📂 Project Structure

```
e2e-testing/
├── .github/
│   └── workflows/
│       └── ci.yml           # GitHub Actions CI configuration (manual trigger)
├── cypress/
│   ├── e2e/
│   │   ├── assertions/      # Assertion classes (e.g., login.assertions.ts)
│   │   ├── helpers/         # Helper files (e.g., error.messages.ts)
│   │   ├── pom/             # Page Object Model classes (e.g., login.pom.ts)
│   │   └── tests/           # Test spec files (e.g., login.cy.ts)
│   ├── fixtures/
│   │   └── users.json       # Test data
│   ├── screenshots/         # Screenshots (generated on test failure)
│   ├── selectors/           # Centralized selectors (e.g., login.selectors.ts)
│   ├── support/
│   │   ├── commands.ts      # Custom Cypress commands
│   │   ├── e2e.ts           # Global E2E setup (imports commands)
│   │   ├── index.d.ts       # TypeScript definitions for custom commands & global types
│   │   ├── paths.ts         # Application path constants
│   │   └── utils.ts         # Utility functions (e.g., getUserData)
│   └── videos/              # Videos (if enabled)
├── cypress.config.ts        # Cypress main configuration
└── tsconfig.json            # TypeScript compiler options
```

## 🧪 Key Components Explained

### Page Object Model (POM)

Located in `cypress/e2e/pom/`. POM classes encapsulate page-specific elements and interaction methods, promoting reusability and maintainability.
_Example:_ `login.pom.ts` provides methods like `visit()`, `typeUsername(username)`, `typePassword(password)`, and `clickLoginButton()`.

### Custom Cypress Commands

Defined in `cypress/support/commands.ts` and typed in `cypress/support/index.d.ts`. These abstract common sequences of actions:

- `cy.findByDataTest(selector)`: A shorthand for `cy.get('[data-test="selector"]')`.
- `cy.performLogin(userKey, passwordOverride?)`: Retrieves user data by `userKey` (from `users.json`) and performs login actions. It can also accept a `passwordOverride`.

### Selectors

Centralized in `cypress/selectors/`. This makes it easy to update selectors in one place if the UI changes.
_Example:_ `login.selectors.ts` exports an object with selectors for login page elements.

### Assertion Classes

Located in `cypress/e2e/assertions/`. These classes group related assertion logic, making tests cleaner and assertions more expressive.
_Example:_ `login.assertions.ts` has `assertLoginError(errorMessage)` to check for specific error messages on the login page. `inventory.assertions.ts` has `assertPageIsVisible()` for the inventory page.

### Helper Files

- `cypress/e2e/helpers/error.messages.ts`: Provides a centralized store for error message strings, preventing magic strings in tests.
- `cypress/support/utils.ts`: Contains utility functions like `getUserData` (to fetch user details from fixtures) and `titleCaseItemName`.
- `cypress/support/paths.ts`: Defines application route paths for consistent navigation.

### Fixtures

Stored in `cypress/fixtures/` (e.g., `users.json`). They separate test data from test logic, making tests more data-driven and easier to manage.

### GitHub Actions CI

The workflow in `.github/workflows/ci.yml` is configured for manual triggering. When run, it sets up a Node.js environment on a standard Ubuntu virtual machine provided by GitHub, installs dependencies, and executes Cypress tests. Screenshots are uploaded on failure.

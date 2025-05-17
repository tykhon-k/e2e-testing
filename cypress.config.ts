import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    video: false,
    setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ) {
      on("task", {});
      return config;
    },
  },
});

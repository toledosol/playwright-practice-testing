import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    // Definimos los elementos/localizadores de la pantalla
    this.emailInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.pageTitle = page.locator("h1");
  }

  // Métodos con las acciones de la página
  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com/");
    await this.page.getByRole("link", { name: "Sign in" }).click();
  }

  async login(email: string, pass: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}
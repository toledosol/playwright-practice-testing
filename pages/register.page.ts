import { Page, Locator } from "@playwright/test";

export class RegisterPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly registerButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    // Selectores reales usando atributos data-test del sitio
    this.firstNameInput = page.locator("[data-test='first-name']");
    this.lastNameInput = page.locator("[data-test='last-name']");
    this.emailInput = page.locator("[data-test='email']");
    this.passwordInput = page.locator("[data-test='password']");
    this.registerButton = page.locator("[data-test='register-submit']");
    this.errorMessage = page.locator("[data-test='password-error']");
  }

  async goto() {
    await this.page.goto("https://practicesoftwaretesting.com/auth/register", {
      waitUntil: "networkidle"
    });
  }

  async fillForm(firstName: string, lastName: string, email: string, pass: string) {
    await this.firstNameInput.waitFor({ state: "visible", timeout: 15000 });
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(pass);
  }
}
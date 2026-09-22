import { Page, Locator } from '@playwright/test';

export class CatalogPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly productCards: Locator;
  readonly productItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.productCards = page.locator('.card-title');
    this.productItems = page.locator('.card');
  }

  async goto() {
    await this.page.goto('/');
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }
}
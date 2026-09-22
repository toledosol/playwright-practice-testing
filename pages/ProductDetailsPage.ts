import { Page, Locator } from '@playwright/test';

export class ProductDetailsPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly successAlert: Locator;
  readonly productTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    this.successAlert = page.locator('.alert-success, [role="alert"]');
    // Apuntamos al contenedor principal del título del producto en la vista de detalle
    this.productTitle = page.locator('container h1, .col-md-6 h1, h1');
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async getSuccessMessage(): Promise<Locator> {
    return this.successAlert;
  }
}
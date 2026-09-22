import { test, expect } from '@playwright/test';
import { CatalogPage } from '../pages/CatalogPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';

test.describe('Flujos de E-commerce - Practice Software Testing', () => {

  test('Debe buscar un producto y agregarlo al carrito usando POM', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    const productDetailsPage = new ProductDetailsPage(page);

    await catalogPage.goto();
    await catalogPage.searchProduct('Pliers');

    await catalogPage.productItems.first().click();

    await expect(productDetailsPage.productTitle).toBeVisible();
    await productDetailsPage.addProductToCart();

    const alert = await productDetailsPage.getSuccessMessage();
    await expect(alert).toBeVisible();
    // Ajustado al texto real que emite la aplicación
    await expect(alert).toHaveText(/Product added to shopping cart/i);
  });

});
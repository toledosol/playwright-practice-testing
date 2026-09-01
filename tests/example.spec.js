const { test, expect } = require('@playwright/test');
2
 
3
test('abre playwright.dev', async ({ page }) => {
4
await page.goto('https://playwright.dev/');
5
await expect(page).toHaveTitle(/Playwright/);
6
});
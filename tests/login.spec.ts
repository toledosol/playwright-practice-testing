import {test,expect} from "@playwright/test"

test("TC01 - Validar el título", async ({page})=>{
    await page.goto ("https://practicesoftwaretesting.com/");
    //validar que el titulo corresponda a la pgina que he abierto
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");
});

test("TC02 - Login Happy Path", async ({ page }) => {
  // 1. Navegar a la página principal
  await page.goto("https://practicesoftwaretesting.com/");

  // 2. Hacer clic en el menú "Sign in" buscando por su texto visible
 await page.getByRole("link", { name: "Sign in" }).click();

  // 3.Usar los campos por ID/Label estándar del formulario y escribir el mail y contraseña
  await page.locator("#email").fill("customer@practicesoftwaretesting.com");
  await page.locator("#password").fill("welcome01");

  // Localizar el botón de submit directamente
  await page.getByRole("button", { name: "Login" }).click();

  // Validar el ingreso exitoso
  await expect(page.locator("h1")).toContainText("My account");
});
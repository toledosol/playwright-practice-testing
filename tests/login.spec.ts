import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test.describe("Módulo de Autenticación", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test("TC01 - Validar el título", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    //validar que el titulo corresponda a la pgina que he abierto
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");
  });

  test("TC02 - Login Happy Path", async () => {
    // 1. Navegar a la página principal
    // 2. Hacer clic en el menú "Sign in" buscando por su texto visible
    await loginPage.goto();

    // 3.Usar los campos por ID/Label estándar del formulario y escribir el mail y contraseña
    // Localizar el botón de submit directamente
    await loginPage.login("customer@practicesoftwaretesting.com", "welcome01");

    // Validar el ingreso exitoso
    await expect(loginPage.pageTitle).toContainText("My account");
  });
});
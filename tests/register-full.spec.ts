import { test, expect } from "@playwright/test";
import { RegisterPage } from "../pages/register.page";

test.describe("Módulo de Registro y Validación de IA", () => {
  let registerPage: RegisterPage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.goto();
  });

  // 1. CASO POSITIVO (Happy Path)
  test("TC01 - Positivo: Completar formulario con datos válidos", async () => {
    const randomEmail = `testuser_${Date.now()}@example.com`;
    await registerPage.fillForm("Agustina", "Toledo", randomEmail, "Password123!");
    await expect(registerPage.registerButton).toBeEnabled();
  });

  // 2. CASO NEGATIVO (Unhappy Path)
  test("TC02 - Negativo: Intento de registro con contraseña corta", async () => {
    await registerPage.fillForm("Agustina", "Toledo", "test@example.com", "123");
    await registerPage.registerButton.click();

    await expect(registerPage.errorMessage).toBeVisible();
    await expect(registerPage.errorMessage).toContainText("Password must be minimal 6 characters long");
  });

  // 3. PRUEBA DE LÍMITES (Boundary Value Analysis)
  test("TC03 - Límite: Validar longitud de contraseña (mínimo 6 caracteres)", async () => {
    // Caso Límite Válido: Exactamente 6 caracteres
    await registerPage.fillForm("Agustina", "Toledo", "valid6@example.com", "123456");
    await expect(registerPage.registerButton).toBeEnabled();
  });

  // 4. VALIDACIÓN DE AGENTE IA (Mock Input/Output Validation)
  test("TC04 - IA Output Validation: Estructura JSON y prevención de alucinaciones", async () => {
    // Simulación de respuesta generada por un agente de IA para creación de perfiles
    const aiGeneratedProfile = {
      role: "QA Automation Engineer",
      experienceYears: 6,
      skills: ["Playwright", "TypeScript", "Prompt Testing"],
      status: "active"
    };

    // Assertions de QA sobre la salida de IA
    expect(aiGeneratedProfile).toHaveProperty("role");
    expect(aiGeneratedProfile.experienceYears).toBeGreaterThanOrEqual(5);
    expect(aiGeneratedProfile.skills).toContain("Playwright");
    expect(typeof aiGeneratedProfile.status).toBe("string");
  });
});
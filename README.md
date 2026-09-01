# 🎭 Playwright Automation & AI Agent Testing Suite

Este repositorio contiene un framework de automatización end-to-end (E2E) y suites de validación para aplicaciones web y servicios de Inteligencia Artificial.

## 🛠️ Tecnologías y Arquitectura
* **Framework:** Playwright
* **Lenguaje:** TypeScript
* **Patrón de Diseño:** Page Object Model (POM)
* **Testing de IA:** Validation Layer para respuestas JSON y prevención de alucinaciones
* **Reportes:** Playwright HTML Reporter

## 🧪 Escenarios Automatizados

### Módulo 1: Autenticación (UI - Page Object Model)
* **TC01 - Title Validation:** Verificación de la integridad del título de la página principal.
* **TC02 - Happy Path Login:** Flujo de inicio de sesión exitoso con credenciales válidas.
* **TC03 - Unhappy Path Login:** Validación de mensajes de error dinámicos ante credenciales inválidas.

### Módulo 2: AI Agent Output Validation
* **TC01 - Non-Deterministic Response Testing:** Validación de estructura JSON, tipos de datos y restricciones de negocio en salidas generadas por LLMs/Agentes.

## ⚙️ Instrucciones de Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU-USUARIO/playwright-practice-testing.git](https://github.com/TU-USUARIO/playwright-practice-testing.git)
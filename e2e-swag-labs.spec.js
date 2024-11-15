const { test, expect } = require('@playwright/test')

test.describe('SauceDemo E2E Regression Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
  })


  test('Login with valid credentials', async ({ page }) => {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    const productPageTitle = await page.title()
    expect(productPageTitle).toContain('Swag Labs')
  })

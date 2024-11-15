const { test, expect, errors } = require('@playwright/test')
const selector = require('./selectors')
const addItems = require('./addItems')

test.describe('Saucedemo Swag Labs - E2E Regression Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    await page.fill(selector.loginPage.usernameInput, 'standard_user')
    await page.fill(selector.loginPage.passwordInput, 'secret_sauce')
    await page.click(selector.loginPage.loginButton)
  })

  // Test Case 1: Verify login with valid credentials
  test('Login with valid credentials', async ({ page }) => {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    const productPageTitle = await page.title()
    expect(productPageTitle).toContain('Swag Labs')
  })

  // Test Case 2: Verify adding products to the cart
  test('Add product to cart', async ({ page }) => {
    await page.click(selector.inventoryPage.addToCartButtons) // Add first product to the cart
    const cartCount = await page.textContent(selector.inventoryPage.cartBadge)
    expect(cartCount).toBe('1')
  })

  // Test Case 3: Verify removing products from the cart
  test('Remove product from cart', async ({ page }) => {
    await page.click(selector.inventoryPage.addToCartButtons); // Add first product to the cart
    await page.click(selector.inventoryPage.cartBadge) // Go to cart
    await page.click(selector.inventoryPage.removeItem) // Remove product from cart
    const cartBadge = await page.$(selector.inventoryPage.cartBadge)
    expect(cartBadge).toBeNull()
  });

  // Test Case 4: Verify adding multiple products to cart
  test('Add multiple items to cart', async ({ page }) => {
    await addItems.addMultipleItems(page, 4)
    const cartCount = await page.textContent(selector.inventoryPage.cartBadge)
    expect(cartCount).toBe('4')
  })

  // Test Case 5: Verify checkout with valid information
  test('Checkout process', async ({ page }) => {
    await page.click(selector.inventoryPage.cartLink) // Go to cart
    await page.click(selector.checkout.checkoutButton)
    await page.fill(selector.checkout.firstName, 'Dong')
    await page.fill(selector.checkout.lastName, 'Hoang')
    await page.fill(selector.checkout.postCode, '2138')
    await page.click(selector.checkout.continueButton)
    await page.click(selector.checkout.finisshButton)
    const confirmationText = await page.textContent('.complete-header')
    expect(confirmationText).toBe('Thank you for your order!')
  })

  // Test Case 6: Verify logout
  test('Logout', async ({ page }) => {
    await page.click(selector.navigation.burgerMenuButton)
    await page.click(selector.navigation.logoutLink)
    await expect(page).toHaveURL('https://www.saucedemo.com/')
    await expect(page.locator(selector.loginPage.loginButton)).toBeVisible()
  })
})

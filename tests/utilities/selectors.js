module.exports = {
  // Locators for the Login Page
  loginPage: {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button'
  },

  // Locators for the Inventory Page
  inventoryPage: {
    addToCartButtons: '.inventory_item button',
    cartLink: '.shopping_cart_link',
    cartBadge: '.shopping_cart_badge',
    productTitle: '.inventory_item_name',
    removeItem: '#remove-sauce-labs-backpack'
  },

  // Locators for the Logout and Navigation
  navigation: {
    burgerMenuButton: '#react-burger-menu-btn',
    logoutLink: '#logout_sidebar_link'
  },

    // Locators for the Checkout page
    checkout: {
      checkoutButton: '#checkout',
      firstName: '#first-name',
      lastName: '#last-name',
      postCode: '#postal-code',
      continueButton: '#continue',
      finisshButton: '#finish'
    }
};

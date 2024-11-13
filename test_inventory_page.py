from playwright.sync_api import sync_playwright

def test_inventory_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context()
        page = context.new_page()

        # Navigate to the login page
        page.goto("https://www.saucedemo.com/")
        
        # Perform login
        page.fill("input[data-test='username']", "standard_user")
        page.fill("input[data-test='password']", "secret_sauce")
        page.click("input[data-test='login-button']")

        # Verify navigation to the inventory page
        page.goto("https://www.saucedemo.com/inventory.html")

        # 1. Verify the page title
        assert page.title() == "Swag Labs", "Page title is incorrect"

        # 2. Verify the side menu is present
        side_menu_button = page.locator("button[id='react-burger-menu-btn']")
        assert side_menu_button.is_visible(), "Side menu button is not visible"

        # 3. Verify the shopping cart icon is visible
        cart_icon = page.locator("a.shopping_cart_link")
        assert cart_icon.is_visible(), "Shopping cart icon is not visible"

        # 4. Verify there are 6 items on the page
        items = page.locator(".inventory_item")
        assert items.count() == 6, f"Expected 6 items, but found {items.count()}"

        browser.close()

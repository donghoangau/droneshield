from playwright.sync_api import sync_playwright

def login_test(page, username, password):
    page.goto("https://www.saucedemo.com/")
    page.fill("input[data-test='username']", username)
    page.fill("input[data-test='password']", password)
    page.click("input[data-test='login-button']")

def verify_content_page(page):
    # Verify inventory page
    assert page.locator(".inventory_list").is_visible(), "Inventory list is not visible"
    assert page.locator(".shopping_cart_link").is_visible(), "Shopping cart link is not visible"
    assert "inventory" in page.url, "User is not on the inventory page"
    items = page.locator(".inventory_item")
    assert items.count() == 6, f"Expected 6 items, but found {items.count()}"


def test_login_page():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context()
        page = context.new_page()

        users = [
            {"username": "standard_user", "password": "secret_sauce", "expected": "success"},
            {"username": "locked_out_user", "password": "secret_sauce", "expected": "error", "message": "Epic sadface: Sorry, this user has been locked out."},
            {"username": "problem_user", "password": "secret_sauce", "expected": "success"},
            {"username": "performance_glitch_user", "password": "secret_sauce", "expected": "success"},
            {"username": "invalid_user", "password": "secret_sauce", "expected": "error", "message": "Epic sadface: Username and password do not match any user in this service"},
            {"username": "standard_user", "password": "wrong_password", "expected": "error", "message": "Epic sadface: Username and password do not match any user in this service"}
        ]

        for user in users:
            login_test(page, user["username"], user["password"])
            
            if user["expected"] == "success":
                verify_content_page(page)

                page.click("#react-burger-menu-btn")
                page.click("#logout_sidebar_link")
            else:
                error_message = page.locator("h3[data-test='error']")
                assert error_message.is_visible(), f"Error message not visible for {user['username']}"
                assert error_message.text_content() == user["message"], f"Unexpected error message for {user['username']}"

        browser.close()

if __name__ == "__main__":
    test_login_page()

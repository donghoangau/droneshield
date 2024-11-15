Test Strategy for SauceDemo E-commerce Website
Website: https://www.saucedemo.com

Login Credentials:

Username: standard_user
Password: secret_sauce

1. Introduction
    The test strategy is more focusing on defining the scope of testing, each scope explains the approach and guidelines that will be followed.
    The test strategy will ensure the SauceDemo website meets the requirements and performs well under various scenarios on production. 
    This document will cover testing techniques, types of testing to be performed, tools to be used, and overall testing goals.

2. Objectives
    To verify that all core functionalities of the website, including critical scenarios, feature flows work as expected such as: login, products order, product listing page, product details, cart management, and checkout.
    To ensure the website provides a smooth user experience across different browsers and devices.
    To identify and address performance bottlenecks and security vulnerabilities.

    2.1 Test Items
          Login Page
          Hamburger menu
          Product listing page
          Product detail page
          Shopping cart
          Ordering products
          Change, update, remove product
          Checkout process
          Logout functionality

    2.2 Features to be tested
          Login Page
              Valid login with the provided credentials.
              Error handling for incorrect username/password.
              Test login with an empty username or password field.
              Password field masking.

          Product Listing Page      
              Loading of product images, names, and prices.
              Sorting products by different options.
              Verify that clicking on a product redirects to the product detail page.
              Verifying that all products load without missing data or broken rendered images.

          Product Detail
              Verifying that the product details (name, description, price) display correctly.
              Checking the "Add to cart" button functionality on the product detail page.

          Shopping Cart
              Adding products to the cart from the product listing and detail pages.
              Removing products from the cart.
              Verifying the cart summary reflects correct item details and total price.
          
          Checkout Process
              Verifying the checkout flow: entering shipping details, and placing an order.
              Error handling for incomplete or incorrect information during checkout.
              Confirmation page after a successful order placement.

          Logout
              Verifying the logout functionality and ensuring it redirects to the login page.
              Token expried requiring user re-login

3. Scope of Testing
    Must in scope:
        Functional Testing
        User Interface (UI) Testing
        User Experience (UX) Testing
        Regression Testing
        Cross-Browser and Cross-Device Compatibility Testing

    Advance test to consider:
        Performance and Load Testing
        Security Testing
        Backend database testing  
        API test, Integration test
        Third-party API testing like payment gateway.

4. Testing Types and Approaches

    4.1 Functional Testing
        Objective: To verify that all the features of the website are working as expected.
        Approach:
            Validate login functionality with valid and invalid credentials.
            Test product listing, sorting, and filtering features.
            Verify add to cart, remove from cart, and cart total calculations.
            Test the complete checkout process, including error handling for incomplete or incorrect data.

    4.2 User Interface (UI) Testing
        Objective: To ensure the website’s layout, design, and visual elements are consistent and meet the specifications.
        Approach:
            Check for any frontend errors in console when page being loaded.    
            Verify page layout consistency across browsers.
            Check for broken images, incorrect formatting, and overlapping elements.
            Validate font sizes, colors, and button styles.
            Responsive verify that the UI renders correctly on different screen sizes and devices.
    
    4.3 User Experience (UX) Testing

        Objective: To assess how user-friendly and intuitive the website is.
        Approach:
            Evaluate the ease of navigation and the overall flow from login to checkout.
            Check responsiveness and usability on different devices (e.g., desktops, tablets, mobile phones).

    4.4 Performance Testing


        Objective: To evaluate the website’s performance under normal and peak load conditions.(Like JMeter, K6)
        Approach:
            Perform load testing to ensure the website can handle a high number of concurrent users.
            Conduct stress testing to determine the website’s breaking point and threshold.
            Use tools like JMeter or K6 for simulating user load and monitoring response times and resource usage.

    4.5 Security Testing

        Objective: To identify and fix vulnerabilities to protect user data and the website from malicious attacks.
        Approach:
            Check for SQL injection, cross-site scripting (XSS), and other common security threats.
            Verify that sensitive data (like passwords) is encrypted.
            Test session management, especially logout functionality and session expiration.
            Logging system to detect any bot and crawling activites.

    4.6 Cross-Browser and Cross-Device Testing

        Objective: To ensure the website works smoothly on different browsers and devices and focus on most widely used browsers on production.
        Approach:
            Gather production data to identify the most widely used browsers among end users, allowing us to prioritize testing efforts accordingly.
            For example: Test on major browsers like Chrome, Firefox, Safari, and Edge.
            Validate the website’s performance on mobile and tablet devices using tools like BrowserStack 3rd party tool.

    4.7 Regression Testing

        Objective: To ensure that new code changes do not adversely affect the existing functionality.
        Approach:
            Maintain a suite of automated test cases to run after each update.
            Focus on critical user flows, such as login, add to cart, and checkout.

5. Test Environment
        Browsers: Chrome, Firefox, Safari, Microsoft Edge (latest versions)
        Devices: Desktop, Tablet, Mobile (iOS and Android)
        Test Data: Use provided credentials for login, existing product items for all test cases, including valid and invalid inputs.
        Data Management: Test data will be created and cleaned up post-testing to maintain a stable test environment.
        Staging Environment: A staging environment mirroring production will be used for testing to ensure reliability.
        Dev Environement, Test Environement, Stress Environment


6. Tools and Technologies
        Functional Testing: Selenium WebDriver/Playwright/Cypress (for UI E2E automation), Postman and K6 (for API testing)
        Performance Testing: JMeter, or K6 Load test
        Cross-Browser Testing: BrowserStack
        Bug Tracking and Test Management: JIRA

7. Test Data Management
        Prepare and manage test data to cover different scenarios, including:
            Valid and invalid login credentials.
                Accepted usernames are:
                    standard_user
                    locked_out_user
                    problem_user
                    performance_glitch_user
                    error_user
                    visual_user
                Password for all users:  secret_sauce
            Shipping and billing address information for checkout.

8. Risk Management
        Risks:
            High traffic might affect performance.
            Potential downtime of the website during testing especially performance/load test
            Limited access to certain test environments for provided credential.
            Sensitive user data might be at risk like customer data leaking.
            Delay in fixing high-severity bugs.
        Mitigation Strategies:
            Have feature toggles/flags.
            Deployment pland and rollback plan 
            Schedule tests and deploy feature at non-peak hours
            Have backup environments and test data available.
            Have logging system and observibility dashboard on production.
            Prioritize and communicate critical incident immediately.  
            Automated regression testing will be implemented for quick verification.


9. Entry and Exit Criteria
        Entry Criteria:
            Test environment is ready and accessible.
            All necessary test data is prepared.
            The website build is stable and has passed initial developer testing.
        Exit Criteria:
            No perforamance regression issue or security issue.
            All critical and major test cases are executed and passed.
            All critical/high bugs are resolved.
            Test summary report is reviewed and approved by stakeholders to agree on deployment.
      
10. Reporting and Communication
        Daily Status Updates: Testing progress should be shared with the team, highlighting progress, issues, and next steps.
        Defect Reporting: All defects will be logged in JIRA with detailed descriptions to replicated steps, screenshots, and severity levels.
        Final Test Report: A comprehensive report summarizing the testing effort, results, and quality of the application will be provide

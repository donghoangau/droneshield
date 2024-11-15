
# SauceDemo E2E Test Using Playwright

This project contains an automated end-to-end (E2E) test for the SauceDemo website using Playwright in JavaScript. 
The test simulates a complete user flow of logging in, adding an item to the cart, checking out, and logging out.

---

## Prerequisites

**Node.js**: Ensure that Node.js is installed. Download it from [Node.js](https://nodejs.org/).


---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git https://github.com/donghoangau/droneshield.git
   cd droneshield

2. **Install Dependencies:**:
   Navigate to the project directory and run:

   ```bash
   npm install @playwright/test --save-dev

3. **Install Chromium Browser:**:
   Navigate to the project directory and run:

   ```bash
   npx playwright install

4. **Run test:**:
    To run the test

   ```bash
    npx playwright test

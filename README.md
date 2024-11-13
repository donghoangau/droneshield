# droneshield

Use a Virtual Environment when using Python

1. Create a virtual environment: Open your terminal and run: python3 -m venv path/to/venv
2. Replace path/to/venv with the path where you want to create your virtual environment (e.g., ~/venv).
3. Activate the virtual environment on macOS/Linux: source path/to/venv/bin/activate
4. Install Playwright in the virtual environment: python -m pip install playwright
5. Install the Playwright browsers: playwright install
6. Run script test: python test_login.py
7. To generate and view a detailed test report for tests, install pytest combined with pytest-html to create and view test reports.
   Here's how to set this up: pip install pytest pytest-html
8. View the HTML Report
   After running script: python test_login.py, report.html is saved current directory.
   Open the report.html file in  browser to view the detailed test report, which will include information on test outcomes, durations, and any errors or failures.

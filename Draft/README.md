# DroneShield

## Setup Instructions

### Using a Virtual Environment with Python

1. **Create a Virtual Environment:**
   - Open your terminal and run:
     ```
     python3 -m venv path/to/venv
     ```
   - Replace `path/to/venv` with your desired path for the virtual environment (e.g., `~/venv`).

2. **Activate the Virtual Environment:**
   - **On macOS/Linux:**
     ```
     source path/to/venv/bin/activate
     ```

### Installing Dependencies

3. **Install Playwrigh Browser:**
   ```
   playwright install
   ```

4. **Run script test**
   ```
   python test_login_page.py
   ```

5. **Setup Report for test result**
   ```bash
   pip install pytest pytest-html
   ```

6. **View the HTML Report**
         After running script: python test_login.py, report.html is saved current directory.
         Open the report.html file in  browser to view the detailed test report, which will include information on test outcomes, durations, and any errors or failures.

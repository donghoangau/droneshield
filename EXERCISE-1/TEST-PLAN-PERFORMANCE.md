1. Introduction
    This performance test plan outlines the approach, objectives, tools, and test scenarios to validate the performance and scalability of the SauceDemo website under different load conditions. The aim is to ensure the application can handle expected and peak user loads while maintaining acceptable response times.

2. Objectives
    Measure and evaluate the website’s performance under normal, peak, and stress conditions.
    Identify performance bottlenecks and areas for optimisation.
    Ensure the website remains stable and responsive with a growing number of concurrent users.
    Validate that the system meets performance requirements such as response time, throughput, and resource utilization.

3. Scope of Testing
    In Scope:
      Load Testing: Evaluate the system's performance under normal and peak load conditions.
      Stress Testing: Determine the system's breaking point and behavior under extreme load.
      Scalability Testing: Assess the system's ability to scale with an increase in users and transactions.
      Spike Testing: Test the system's performance with sudden, large bursts of traffic.
      Endurance Testing: Validate the stability and performance of the website over a prolonged period.
    Out of Scope:
      Testing external dependencies such as third-party payment gateways.
      Performance testing of backend APIs in separate.

4. Performance Metrics
      Response Time: The time taken for the system to respond to a user action (e.g., loading a page or adding an item to the cart).
      Throughput: The number of requests processed per second by the system.
      Concurrent Users: The number of users accessing the website simultaneously.
      Error Rate: The percentage of requests that result in errors.
      Resource Utilization: CPU, memory, and disk usage on the server during the test.

5. Test Environment
      Stress Environment: A Stress environment that mirrors the production setup will be used for performance testing to get accurate results.
      Test Configuration:
      Monitoring Tools: Tools like Grafana requests and monitoring resource usage.

6. Tools and Technologies
      Load Testing Tools: K6
      Monitoring Tools: Grafana as monitoring solutions
      Test Data Management: Production snapshot or create data by generating by APIs

7. Test Scenarios and Cases

      Scenario 1: Home Page Load Test   
        Objective: Measure response time and resource utilization when users access the home page.
        Load: Simulate 1000-5000 concurrent users.
        Expected Result: Home page loads within 2-3 seconds under normal load.

      Scenario 2: Login Page Performance
        Objective: Evaluate the performance of the login process.
        Load: Simulate 1000 concurrent login attempts.
        Expected Result: Response time for login should be within 2-3 seconds.
        
      Scenario 3: Add to Cart Functionality     
        Objective: Assess performance when users add items to the cart.
        Load: Simulate 2000 users adding items to the cart simultaneously.
        Expected Result: Adding items to the cart should be completed within 2 seconds.
      
      Scenario 4: Product Listing Page Load 
        Objective: Measure the performance of the product listing page under load.
        Load: Simulate 1000-3000 concurrent users.
        Expected Result: Product listing page should load within 3-4 seconds.
        
      Scenario 5: Checkout Process    
        Objective: Validate the performance of the entire checkout flow.
        Load: Simulate 300-500 users performing the checkout process simultaneously.
        Expected Result: The checkout process should complete within 4-5 seconds.
      
      Scenario 6: Stress Testing  
        Objective: Identify the system’s breaking point.
        Load: Gradually increase the load until the system fails.
        Expected Result: The system should handle the load gracefully and recover after the test.
        
      Scenario 7: Spike Testing   
        Objective: Test the system's behavior when there is a sudden surge in traffic.
        Load: Simulate sudden spikes of 10000 users.
        Expected Result: The system should handle the surge without significant performance degradation.
        
      Scenario 8: Endurance Testing
        Objective: Validate the stability of the website over a prolonged period.
        Duration: Run tests for 8-12 hours with a steady load of 2000 users.
        Expected Result: The system should remain stable without memory leaks or performance issues.

8. Test Data Management
    User Credentials: Use valid and unique user accounts to simulate login and checkout.
    Products: Pre-populate the database with various product items to ensure realistic test scenarios.
    Data Cleanup: Reset data or cleanup data after each test run to maintain a consistent test environment.

9. Execution Plan
    Pre-Test Setup:
      Configure the test environment and ensure all necessary tools are installed.
      Load test data into the system and verify the initial state.
    Test Execution:
      Run performance tests during off-peak hours to minimize impact on the system.
      Monitor server performance and collect logs for analysis.
    Post-Test Activities:
      Analyze performance data and identify any bottlenecks.
      Generate a performance test report with findings and recommendations.

10. Risks and Mitigation
      Risk: Test environment not matching the production environment.
        Mitigation: Ensure the staging environment closely mirrors production.
      Risk: High traffic impacting live users during testing.
        Mitigation: Schedule tests during non-peak hours and use a separate environment.
      Risk: Resource constraints during load testing.
        Mitigation: Use cloud-based load testing tools to scale as needed.

# Automated Hosted Checkout Testing for AU Region using Mock Bank AU

This project showcases automated testing for Hosted Checkout using Cypress. It encompasses diverse scenarios related to the checkout 
and payment process, ensuring comprehensive coverage. The tests are designed to simulate varying scenarios, guaranteeing the robust 
functionality of the Hosted Checkout process. Importantly, these tests are OS-agnostic, enabling seamless execution across different 
operating systems without requiring modifications.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Custom Commands](#custom-commands)
- [Test Scenarios](#test-scenarios)
- [Contributing](#contributing)
- [License](#license)

## Description

This project uses Cypress, a powerful end-to-end testing framework, to automate the testing of the Hosted Checkout process for the Australian region using Mock Bank AU. The tests cover a range of scenarios to validate the functionality of the checkout and payment flow.

## Prerequisites

Before running the tests, make sure you have the following prerequisites installed on your system:

- Node.js (with npm)
- Cypress

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Run the following command to install the project dependencies:

   ```bash
   npm install
   ```

## Running Tests

You can execute the automated tests using the following commands:

- Run tests in headless mode (without GUI):

  ```bash
  npm run cy:run
  ```

- Run tests in headed mode (with GUI):

  ```bash
  npm run cy:run:headed
  ```

## Custom Commands

This project uses custom Cypress commands to simplify the testing process. These commands are located in the `commands.js` file. They provide a cleaner and more readable way to interact with the application during the test execution.

## Test Scenarios

The test scenarios are defined in the `checkoutFlowData.json` fixture file. Each scenario represents a specific checkout and payment scenario. The tests are designed to cover different scenarios, such as successful payments, agreement expirations, and insufficient funds.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [ISC License](LICENSE).

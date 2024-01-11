# My_favorite_burger_purchase
Automated Cypress test script for ordering a favorite burger :hamburger: from Wolt.com and delivery to Kauno Dokas.

## Table of Contents

- [Introduction](#introduction)
- [Test Scenario](#test-scenario)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone Repository](#clone-repository)
  - [Installation](#installation)
  - [Test Execution](#test-execution)
- [Your Contribution](#your-contribution)

 ## Introduction

This Cypress test script is part of a practical task I'm completing for the QA Engineer internship selection process. It automates the process of ordering a delicious burger from Wolt.com and having it delivered to Kauno Dokas. The script covers key functionalities such as selecting a restaurant, adding a burger to the cart, and proceeding to checkout. :hamburger:

## Test scenario

The Cypress test script simulates the user journey on Wolt.com to order a burger for delivery to Kauno Dokas. The test consists of the following steps:

1. Navigates to Wolt.com.
2. Accepts the cookie consent.
3. Selects the delivery address.
4. Searches for a restaurant offering burgers.
5. Selects a specific burger from the menu.
6. Customizes the order.
7. Adds items to the cart.
8. Views the order and verifies details.
9. Proceeds to checkout.

## Getting started

### Prerequisites
Before running the test, make sure you have the following installed:


- [Node.js](https://nodejs.org/) installed on your machine
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) installed globally


### Clone Repository
Clone the repository containing the Cypress test script:

- Github link
```
https://github.com/LediRai/My_Favorite_burger_purchase.git
```
- Or use command line
```
git clone https://github.com/LediRai/My_Favorite_burger_purchase.git
```

### Installation

To install Cypress and its dependencies, run the following command:

```
npm install  
``` 

### Test Execution

To run the test scripts in ui mode

1. Open the terminal inside the project folder.
2. Run the command:
```
npx cypress open
```
3. In the Cypress Test Runner, choose a testing type  "e2e" and select a browser (e.g., "Electron").
4. Click on the order.cy.js test from the displayed list.
5. The selected test will run in the chosen browser.

Or run test scripts in terminal
```
npx cypress run
```

#### Your contribution

If you have any observations, suggestions or ideas to improve the project, please contact me by e-mail: r.jasevske@gmail.com.





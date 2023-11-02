# Zeller Customers React App

## Introduction

This repository contains a simple React app built with TypeScript, integrated with GraphQL APIs. The app focuses on displaying Zeller customers and allows filtering based on user types (Admin/Manager). The project structure, technology stack, GraphQL integration, UI implementation, and performance optimization are outlined below.

## Project Setup

This project was bootstrapped with Create React App. It's configured to interact with the AWS AppSync GraphQL API using the provided `aws-exports.js` configuration.

## Guidelines

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

To run unit testing.

### `yarn cypress`

To run e2e testing.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified, and the filenames include the hashes. Your app is ready to be deployed!

### `yarn eject`

\*\*Note: this is a one-way operation. Once you `eject`, you can't go back!

## Technology Stack

- React
- React Query
- Chakra UI UI Library
- GraphQL
- TypeScript
- Axios
- Cypress for E2E testing
- React-testing-library for unit testing

## Project Structure

- The project structure is organized with a simple approach:
  - Pages are in the `pages` folder, with the `Customers` page.
  - Components are housed in the `components` folder, with subfolders containing individual components and their respective unit test files.

## GraphQL Integration

- React Query, in combination with Axios, is used to fetch and manage data from a GraphQL API.
- This combination allows us to benefit from React Query's data management capabilities while leveraging Axios for making HTTP requests to the GraphQL API.

## UI Implementation

**UI Structure:**

- The user interface is structured into sections, including "User Types" and "Admin Users," providing a clear layout for displaying customer data.

**Component Breakdown:**

- The application utilizes two core components:
  - `RadioButton` handles user type selection and provides an interactive radio button interface.
  - `UserCard` is responsible for displaying user information, including the user's name and role.

**Responsiveness:**

- The user interface is designed to be responsive, ensuring a seamless user experience across different screen sizes and orientations.

**Styling and Theming:**

- Chakra UI is used for consistent and visually pleasing styling.
- Custom theming applied to match the design to the provided image (`zeller-customers-design.png`).

**Loading and Error States:**

- The application handles loading and error states gracefully.
- "Loading..." is displayed during data fetching, and an "Error" message with details is shown in case of an issue.

**Testing:**

- Unit testing is performed using React-testing-library, ensuring that individual components function correctly and produce the expected results.
- E2E testing is conducted with Cypress, validating the application's functionality as a whole and guaranteeing a smooth end-user experience.

**Performance Optimization:**

- `useMemo` is applied to enhance performance by efficiently categorizing and organizing customer data based on roles (Admin/Manager).
- It prevents unnecessary re-computation of data, resulting in a more responsive and efficient user experience, particularly when dealing with larger datasets.
- This optimization minimizes redundant calculations and rendering cycles.

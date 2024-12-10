# CI/CD Tech Quiz

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contribution](#contribution)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Description

This project demonstrates the integration of a **CI/CD pipeline** into a full-stack application using **GitHub Actions** and **Render**. The pipeline is designed to:
1. Run Cypress component tests automatically when a Pull Request is made to the `develop` branch.
2. Automatically deploy the application to **Render** when code is merged from the `develop` branch to the `main` branch.

This implementation ensures that new code integrations are clean, tested, and ready for deployment, streamlining the development process.

## Features
- Runs Cypress component tests on Pull Requests to the `develop` branch.
- Provides test results directly in GitHub Actions.
- Automatically deploys the application to Render when the `main` branch is updated.
- Simplifies development workflows with automation and continuous integration.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/BrandonLanes/ci-cd-tech-quiz

2. Navigate to the project directory:
   cd ci-cd-tech-quiz

3. Install dependencies:
   npm install

4. Configure Cypress:
   - Add Cypress test cases in the cypress folder.
   - Install Cypress if not already installed:
   npm install cypress --save-dev

5. Set up GitHub Secrets:
   - Navigate to your repository settings on GitHub.
   - Under Settings > Secrets and variables > Actions, add the following secrets:
      - RENDER_API_KEY: Your Render API key for deployment.
      - RENDER_SERVICE_ID: The Render service ID for your application.

## Usage
1. Pull Request Workflow:
   - Create a new feature branch.
   - Push changes and open a Pull Request to the develop branch.
   - GitHub Actions will automatically run the Cypress tests.

2. Deployment Workflow:
   - Merge code from the develop branch to the main branch.
   - GitHub Actions will trigger the deployment workflow, deploying the application to Render.

## Technologies Used
   - GitHub Actions
   - Cypress
   - Render
   - MERN stack

## Contribution
Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and open a pull request or create an issue.

   1. Fork the project.

   2. Create your feature branch (git checkout -b feature/AmazingFeature).

   3. Commit your changes (git commit -m 'Add some AmazingFeature').

   4. Push to the branch (git push origin feature/AmazingFeature).

   5. Open a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgments
The wonderful TA's and Dan Mueller for all their assistance.

Bootcamp Tutors 

AI - Xpert Learning Assistant, AskBCS Learning Assistant, ChatGPT


# IntelliLearn - Turn game play into on-chain skill

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
<!-- Add other badges if you have them: build status, coverage, etc. -->

IntelliLearn is an innovative platform that gamifies learning through engaging AI-powered educational games. This project aims to make learning more interactive, fun, and effective by leveraging modern web technologies and AI capabilities. Users can play games that test and improve their knowledge, with on-chain elements potentially tracking skills and achievements.

<!-- Optional: Add a high-level screenshot or GIF of the application here -->
<!-- ![IntelliLearn Screenshot](link_to_your_screenshot.png) -->

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Live Demo](#live-demo)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Key Components & Sections](#key-components--sections)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Overview

This project is a landing page and potentially a gateway to the IntelliLearn gaming platform. It showcases the problem IntelliLearn solves, its unique features, the technology behind it, its vision, and how to get involved or contact the team. The platform itself (the game part) might be hosted at `https://intelli-learn-c8ln.vercel.app/`.

This project won at the **Educhain Semester 3 Hackathon**! [Read more about the win](https://medium.com/edu-chain/semester-3-hackathon-winners-7d5905b1db14).

## Features

*   **Engaging Landing Page:** A modern, responsive single-page application (SPA) built with React.
*   **Smooth Scrolling Navigation:** Easy navigation between different sections of the page.
*   **Hackathon Winner Banner:** Prominently displays the project's hackathon achievement.
*   **Problem/Opportunity Section:** Highlights the challenges in traditional learning and the solutions IntelliLearn offers.
*   **Key Features Showcase:** Details the unique selling points of the IntelliLearn platform.
*   **"How It Works" Section:** Explains the user journey and platform mechanics.
*   **Technology Stack Overview:** Mentions the core technologies used.
*   **Vision & Future Scope:** Outlines the long-term goals and potential expansions.
*   **Investor & Call-to-Action:** Information for potential investors and clear calls to action.
*   **Contact Form/Information:** (Currently removed, can be re-added) Allows users to get in touch.
*   **"Play Games" Button:** Directs users to the live gaming application.
*   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).

## Live Demo

*   **Landing Page:** [Your Landing Page Vercel/Netlify/GitHub Pages URL]
*   **Gaming Platform:** [https://intelli-learn-c8ln.vercel.app/](https://intelli-learn-c8ln.vercel.app/)

## Technology Stack

*   **Frontend:**
    *   React.js
    *   CSS Modules (for component-scoped styling)
    *   HTML5
    *   CSS3 (with Custom Properties/Variables)
    *   JavaScript (ES6+)
*   **Scrolling:**
    *   `react-scroll` for smooth in-page navigation.
*   **Styling & UI:**
    *   Custom CSS with a defined color palette and typography.
    *   Font Awesome (for icons, via CDN).
*   **Deployment:**
    *   Vercel / Netlify / GitHub Pages (Specify which one you are using)
*   **Version Control:**
    *   Git & GitHub

<!-- Add backend/blockchain details if relevant to THIS landing page repo, or link to a separate repo for the game itself -->

## Project Structure

```
intellilearn-landing-page/
├── public/
│   ├── index.html      # Main HTML template
│   ├── favicon.ico     # Favicon
│   └── manifest.json   # Web app manifest
│   └── logo.png        # (or other image assets)
├── src/
│   ├── assets/         # Static assets like images, fonts
│   │   └── images/
│   │       └── logo.png
│   ├── components/     # Reusable UI components
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.module.css
│   │   ├── Footer/
│   │   ├── Button/
│   │   └── HackathonBanner/
│   ├── sections/       # Page sections (Hero, Features, etc.)
│   │   ├── Hero/
│   │   │   ├── Hero.js
│   │   │   └── Hero.module.css
│   │   └── ... (other sections)
│   ├── App.js          # Main application component
│   ├── App.css         # Global App styles
│   ├── index.js        # Entry point of the React application
│   ├── index.css       # Global styles, CSS variables, resets
│   └── ... (other files like serviceWorker.js if used)
├── .gitignore          # Files to ignore by Git
├── package.json        # Project dependencies and scripts
├── package-lock.json   # Exact versions of dependencies
└── README.md           # This file
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (v14.x or later recommended)
*   npm (v6.x or later) or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Intellilearn-org/IL-Website # Replace with your actual repo URL
    cd your-repo-name
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

### Running the Development Server

This command will start the development server, usually on `http://localhost:3000`, and automatically open it in your default browser. The page will reload if you make edits.

Using npm:
```bash
npm start
```
Or using yarn:
```bash
yarn start
```

### Building for Production

This command will create an optimized static build of your application in the `build` folder. These files are ready to be deployed to a static site hosting service.

Using npm:
```bash
npm run build
```
Or using yarn:
```bash
yarn build
```

## Key Components & Sections

*   **`HackathonBanner`**: Displays the hackathon win announcement at the top.
*   **`Navbar`**: Fixed navigation bar with links to sections and a "Play Games" button. Adapts dynamically to the banner height.
*   **`Hero`**: The main introductory section with a headline, sub-headline, and call-to-action buttons.
*   **`ProblemOpportunity`**: Two-column layout explaining the problem and opportunity.
*   **`Features`**: Grid display of key platform features using cards.
*   **`HowItWorks`**: Step-by-step explanation of the platform's workflow.
*   **`Technology`**: Highlights the technologies used in the project.
*   **`VisionFutureScope`**: Discusses the project's vision and future plans.
*   **`Investor`**: A section aimed at potential investors.
*   **`Footer`**: Contains copyright information, logo, and social/contact links.

## Configuration

*   **CSS Variables (`src/index.css`):** Theme colors, fonts, and layout dimensions (like navbar height) are defined here.
*   **Banner Height (`src/components/HackathonBanner/HackathonBanner.js` & `src/App.js`):** The banner height is dynamically calculated to ensure proper layout adjustments.
*   **External Links:**
    *   Hackathon Article: Defined in `src/components/HackathonBanner/HackathonBanner.js`.
    *   Play Games URL: Defined in `src/components/Navbar/Navbar.js`.
    *   Social Media URLs: Defined in `src/components/Footer/Footer.js`.

## Contributing

Contributions are welcome! If you have suggestions for improving the landing page or want to contribute, please follow these steps:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for the full license text.

## Acknowledgements

*   Educhain for hosting the hackathon.
*   React and the open-source community.
*   Contributors and team members.
*   [Any other libraries, assets, or inspirations you want to acknowledge]

## Contact

*   **X (Twitter):** [@Intellilearn\_ec](https://twitter.com/Intellilearn_ec)
*   **Email:** [intellilearn.games@gmail.com](mailto:intellilearn.games@gmail.com)
*   **GitHub Organization:** [Intellilearn-org](https://github.com/Intellilearn-org)
*   **Project Link:** [https://github.com/Intellilearn-org/IL-Website](https://github.com/Intellilearn-org/IL-Website)



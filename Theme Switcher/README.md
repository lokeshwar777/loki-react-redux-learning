# Theme Switcher

Welcome to the Theme Switcher project! This React-based application allows users to toggle between light and dark themes, providing a visually appealing user experience.

## Overview

The project includes the following key files:

- **`Card.jsx`**: This file contains the `Card` component, showcasing an example card with an image, title, rating, and price. The card's appearance is influenced by the selected theme.

- **`ThemeBtn.jsx`**: The `ThemeBtn` component is responsible for rendering a toggle switch that allows users to switch between light and dark themes.

- **`App.jsx`**: The main `App` component manages the overall structure of the application. It utilizes the `ThemeProvider` to provide theme-related functionality to its child components.

## Features

- Toggle between light and dark themes.
- Dynamically update the appearance of UI components based on the selected theme.

## Getting Started

Follow these simple steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

Install dependencies

```bash
npm install
```

Install Tailwind CSS

```bash
npx tailwindcss init -p
```

### Running the App

Start the development server.

```bash
npm run dev
```

### Building for Production

Build the project for production.

```bash
npm run build
```

## Usage

1. Launch the application, and you will see a card with a toggle switch.
2. Use the toggle switch to switch between light and dark themes.
3. Observe the changes in the card's appearance based on the selected theme.

## Tutorial Source

This project was inspired by a tutorial from the "Chai aur React" YouTube channel by [Hitesh Choudhary](https://www.youtube.com/@chaiaurcode).

- [Chai aur React Playlist](https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=uK4P_CC_IDk520n4)
- Specific Video: [Context API crash course with 2 projects](https://youtu.be/JQVBGtZMqgU?si=az9Wadw5L7G9XLej)

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) - Next-generation frontend tooling.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.

## Credits

This project benefited from the assistance of ChatGPT, a language model developed by OpenAI. ChatGPT provided guidance and help in refining certain aspects of the project.

## License

This project is licensed under the [MIT License](LICENSE).

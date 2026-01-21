# AI Guessing Game

An interactive web-based game where players challenge their perception by identifying **AI-generated images** among real photographs.

Built with **React**, **TypeScript**, and **Vite**, ensuring high performance and type safety. The project includes comprehensive unit tests using **Vitest**.

## Features

* **3 Distinct Game Modes:** Classic, Hardcore, and Time Attack.
* **Interactive UI:** Immediate visual feedback (Green/Red borders, Icons) upon selection.
* **Scoring System:** Tracks user score and high scores per session.
* **Responsive Design:** Fully optimized for desktop and mobile devices.
* **Unit Testing:** Achieved **>70% code coverage** for core components.

## Game Modes

Players can choose a mode that fits their skill level:

| Mode Name | Lives (Attempts) | Hints | Time Limit | Difficulty |
| :--- | :---: | :---: | :---: | :---: |
| **Classic Mode** | 2 | Yes | None | Normal |
| **Hardcore Mode** | 1 | No | None | Hard |
| **Time Attack** | 2 | Yes | 15 Sec | Intense |

* **Classic Mode:** Standard gameplay. If you make a mistake, you get a second chance and a hint.
* **Hardcore Mode:** For experts. One wrong click and it's **Game Over**. No hints provided.
* **Time Attack:** Race against the clock. You have **15 seconds** per question.

## Tech Stack

* **Framework:** [React](https://react.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Testing:** [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)
* **Package Manager:** pnpm

## Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/MertNaci/ai-image-guesser.git](https://github.com/MertNaci/ai-image-guesser.git)
    cd ai-image-guesser
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```
    Open `http://localhost:5173` in your browser.

## Testing

This project adheres to strict testing requirements. Unit tests are implemented for critical components (**App**, **StartScreen**, **ResultScreen**) ensuring **over 70% code coverage**.

To run the tests:

```bash
# Run tests once
pnpm test

# View coverage report
pnpm coverage

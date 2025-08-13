# 💬 Random Quote Machine 💬

A single-page application built with React that fulfills the requirements for the freeCodeCamp "Random Quote Machine" project.
[FCC Random Quote Machine Project Site](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine)

---

## 🚀 Live Demo

A live version of this project can be viewed here: **[LINK TO YOUR DEPLOYED SITE]**

---

## ✨ Features

* **Random Quotes:** Displays a random quote and its author when the page loads.
* **New Quote Generation:** Clicking the "New Quote" button fetches and displays a new random quote from the API.
* **Share on X (ex-Twitter):** Clicking the "Tweet" button opens an X intent window with the current quote pre-populated, ready for sharing.
* **Responsive Design:** The layout is fully responsive and centered on the page, ensuring a great user experience on any device.

---

## 🛠️ Tech Stack

* **React:** Used for building the component-based user interface and managing application state with `useState` and `useEffect` hooks.
* **Vite:** Serves as the modern, fast frontend build tool.
* **JavaScript (ES6+):** Utilized for the core application logic, including `async/await` for asynchronous API calls.
* **Bootstrap 5:** Employed for its powerful and responsive layout utilities, especially the Flexbox grid for centering content.
* **Sass:** Used for custom styling and organization of CSS (future improvements).
* **HTML5 & CSS3:** The foundational languages for the structure and final presentation.
* **Quotable API:** Used for fetching random quote data.

---

## 🎨 Future Improvements

* Integrate Google Fonts for improved typography.
* Replace the text-based "Tweet" link with a modern X SVG icon.
* Add a subtle box-shadow and rounded corners to the quote box for a polished, card-like appearance.
* Implement a dynamic color scheme where the background color of the page and quote box changes smoothly with each new quote.

---

## 🧑‍💻 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/gapn/random-quote-machine.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd random-quote-machine
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Start the development server:
    ```sh
    npm run dev
    ```
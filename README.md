# LearningApp - Gamified Quiz Platform

## Description
LearningApp is a gamified quiz platform designed to upskill Africans through interactive quizzes. The platform features a landing page and a mini quiz app built with Vue.js.

## Features
- **Landing Page**: A responsive landing page with a navigation menu, social links, and a call-to-action button to start the quiz.
- **Mini Quiz App**: A quiz app with multiple-choice and drag-and-drop questions.
- **Responsive Design**: Fully responsive layout for all devices (desktop, tablet, mobile).
- **Interactive UI**: Smooth transitions and interactive elements for a better user experience.

## Technologies Used
- **Frontend**: Vue.js, Vue Router
- **Styling**: CSS, Flexbox, Media Queries
- **Icons**: Custom icons for social media links
- **Drag-and-Drop**: `vuedraggable` library

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/WBLT4U/MiniQuiz.git
   cd MiniQuiz
2. **Install Dependencies**:
    npm install
3. **Run the development server**:
    npm run serve
4. **Open the app**:
    Visit http://localhost:8080 in your browser.

## Project Structure

src/
├── assets/
│   ├── css/
│   │   └── MiniQuiz.css
│   ├── images/
│   │   ├── facebook-icon.png
│   │   ├── github-icon.png
│   │   ├── email-icon.png
│   │   ├── whatsapp-icon.png
│   │   └── developers.png
├── components/
│   ├── LandingPage.vue
│   └── MiniQuiz.vue
├── router/
│   └── index.js
├── App.vue
└── main.js

## Usage
1. Landing Page:

    * Navigate through the menu links.

    * Click on social media icons to visit external links.

    * Click the "Start Quiz" button to begin the quiz.
2. Mini Quiz:
    * Answer multiple-choice questions by selecting an option.

    * Arrange items in the correct order for drag-and-drop questions.

    * Submit the quiz to view your results.
## Live Demo
https://mini-quiz-jade.vercel.app
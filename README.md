<<<<<<< HEAD
# Expense Tracker

## Overview
This is an Expense Tracker web application that helps users manage their daily expenses. The application allows users to add, edit, delete, and categorize expenses. The app is deployed using Firebase.

## Features
- User Authentication (Sign Up, Login, Logout)
- Add New Expenses
- Edit Existing Expenses
- Delete Expenses
- Expense Categories
- View Expense Summary
- Responsive Design

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Firebase Firestore
- Authentication: Firebase Authentication
- Hosting: Firebase Hosting

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/GayathriKomma/Expense-tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd expense-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Enable Firebase Authentication and Firestore Database.
4. Get your Firebase config and replace it in the project.
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     storageBucket: "your-storage-bucket",
     messagingSenderId: "your-messaging-sender-id",
     appId: "your-app-id"
   };
   ```

## Run Locally
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
3. Login to Firebase:
   ```bash
   firebase login
   ```
4. Deploy the app:
   ```bash
   firebase deploy
   ```

## Live Demo
Check out the live demo [here](https://expense-tracker-22b68.web.app/).

## License
This project is licensed under the MIT License.

[GitHub Repository](https://github.com/GayathriKomma/Expense-tracker)

=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> 95523ce (Initial commit with README and project files)

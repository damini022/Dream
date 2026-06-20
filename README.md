# DreamMind AI 🧠✨

DreamMind AI is an AI-powered web application that analyzes dreams and generates meaningful interpretations using Google's Gemini AI model.

## Features

* AI-powered dream analysis
* User-friendly interface
* Fast and interactive responses
* React-based frontend
* Flask-based backend
* Gemini AI integration

## Tech Stack

### Frontend

* React
* Vite
* CSS

### Backend

* Python
* Flask
* Flask-CORS
* Google Generative AI (Gemini)

## Project Structure

```text
Dream/
│
├── backend/
│   └── app.py
│
└── frontend/
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    │
    ├── src/
    │   ├── assets/
    │   │   ├── hero.png
    │   │   ├── react.svg
    │   │   └── vite.svg
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    │
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── eslint.config.js
    └── README.md
```

## Installation

### Clone the Repository

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd Dream
```

## Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
pip install flask
pip install flask-cors
pip install google-generativeai
```

Run the backend server:

```bash
python app.py
```

Backend will run on:

```text
http://localhost:5000
```

## Frontend Setup

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

## Configuration

Before running the project, generate a Gemini API key from Google AI Studio and configure it in the backend.

Example:

```python
genai.configure(api_key="YOUR_GEMINI_API_KEY")
```

Replace `YOUR_GEMINI_API_KEY` with your own Gemini API key.

⚠️ Never upload your actual API key to a public repository.

## How to Use

1. Start the backend server.
2. Start the frontend server.
3. Open the application in your browser.
4. Enter your dream description.
5. Click the **Analyze Dream** button.
6. Wait for the AI to process your dream.
7. View the generated interpretation and insights.

## Future Enhancements

* User Authentication
* Dream History Tracking
* Personalized Recommendations
* Multi-language Support
* Dark Mode
* Advanced Dream Analytics

## Author

Developed as a Generative AI project using React, Flask, and Google Gemini AI.

## License

This project is intended for educational and learning purposes.

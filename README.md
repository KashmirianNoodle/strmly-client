# STRMLY Frontend

This is the frontend for the STRMLY demo application built using React.js. It provides pages for registration, login, video upload, and viewing a public video feed.

## 🔧 Tech Stack

- React.js
- React Router
- Axios (API requests)
- CSS (Minimal styling)

## 🧱 Project Structure

- `/register` — Signup form
- `/login` — Login form
- `/upload` — Upload video (protected)
- `/feed` — Public video feed

## 📦 Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/strmly-frontend.git
   cd strmly-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file in the root of the project and add your API base URL:

   ```bash
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

> Ensure the backend is running at `http://localhost:5000` or update API URLs in the frontend accordingly.

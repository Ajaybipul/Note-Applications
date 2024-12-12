Here's a README file incorporating all the given information:

---

# Notes Application

A full-stack Notes Application with a React-based frontend and an Express-based backend.

## Project Overview

This application allows users to:
- Register and log in securely.
- Create, edit, delete, and view notes.
- Use light or dark mode for a customized experience.

## Live Demo

- **Frontend**: [Notes App Frontend](https://superlative-meerkat-efdb1b.netlify.app/)
- **Backend**: [Notes App Backend](https://note-applications.onrender.com/)

## Features

### Frontend Features
- Built using React.
- Dark mode toggle, with persistent preferences using `localStorage`.
- Responsive design with Bootstrap 5.
- Authentication via protected routes.
- Integration with REST API for CRUD operations on notes.

### Backend Features
- Built using Node.js and Express.
- Secure authentication system.
- RESTful API for notes management.
- Helmet for enhanced security.
- Dynamic CORS configuration.

## Technologies Used

### Frontend
- React
- React Router
- Bootstrap 5
- react-hot-toast for notifications

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- cookie-parser
- helmet
- cors

## How to Run Locally

### Prerequisites
- Node.js installed on your system.
- MongoDB database running locally or a cloud-hosted instance.

### Clone the Repository
```bash
git clone https://github.com/your-repo/notes-application.git
cd notes-application
```

### Backend Setup
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file:
    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CORS_ORIGINS=https://superlative-meerkat-efdb1b.netlify.app
    ```
4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm start
    ```

The frontend will be accessible at `http://localhost:5173` and the backend at `http://localhost:5000`.

## API Endpoints

### Authentication
- **POST** `/auth/register` - Register a new user.
- **POST** `/auth/login` - Log in a user.

### Notes
- **GET** `/notes/getnotes` - Fetch all notes.
- **POST** `/notes/create` - Create a new note.
- **PUT** `/notes/update/:id` - Update an existing note.
- **DELETE** `/notes/delete/:id` - Delete a note.

## Environment Variables
The application uses the following environment variables:

| Variable       | Description                                |
|----------------|--------------------------------------------|
| `PORT`         | Port for the backend server.              |
| `MONGO_URI`    | MongoDB connection string.                |
| `JWT_SECRET`   | Secret key for JWT authentication.        |
| `CORS_ORIGINS` | Allowed origins for CORS.                 |

## Deployment

### Frontend
Deployed on [Netlify](https://www.netlify.com/).

### Backend
Deployed on [Render](https://render.com/).

## Additional Information

### CORS Configuration
The backend uses dynamic CORS configuration. Allowed origins are specified in the `CORS_ORIGINS` environment variable. This ensures that only trusted domains can access the API.

### Dark Mode Implementation
The frontend includes a dark mode toggle button in the top-right corner. The preference is saved in `localStorage` to maintain the mode across sessions.


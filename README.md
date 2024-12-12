Note Application

This repository contains a Note Application project, which includes a frontend hosted on Netlify and a backend hosted on Render. The application allows users to register, log in, and manage notes with functionality for creating, editing, and deleting notes.

Features

Frontend

Built with React and styled using Bootstrap.

Dark mode toggle for enhanced user experience.

Protected routes to ensure only authenticated users can access specific pages.

Toast notifications for better user feedback.

Backend

Built with Express.js.

Implements authentication with cookies for session management.

Secure API using Helmet.

CORS dynamically configured for allowed origins.

CRUD operations for managing notes.

Hosting

Frontend: Hosted on Netlify: Visit Frontend

Backend: Hosted on Render: Visit Backend

Technologies Used

Frontend

React for building the user interface.

React Router for navigation.

Bootstrap for responsive design.

React Hot Toast for notifications.

Backend

Express.js for creating the API.

Mongoose for database interactions.

Helmet for securing HTTP headers.

Cookie Parser for cookie handling.

CORS for cross-origin resource sharing.

Installation

Frontend

Clone the frontend repository.

Install dependencies:

npm install

Start the development server:

npm start

Backend

Clone the backend repository.

Create a .env file with the following variables:

PORT=5000
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your Secret Key>
CORS_ORIGINS=http://localhost:5173,https://superlative-meerkat-efdb1b.netlify.app

Install dependencies:

npm install

Start the backend server:

npm start

Project Structure

Frontend

/src
  /components    # Reusable React components
  /pages         # Application pages (Home, Login, Register)
  /services      # API endpoint services
  App.js         # Main application file

Backend

/routes
  Auth.js        # Authentication routes
  Notes.js       # Notes management routes
/config
  db.js          # Database connection file
server.js        # Entry point of the backend application

API Endpoints

Authentication Routes (/auth)

POST /register: Register a new user.

POST /login: Log in a user and return a token.

Notes Routes (/notes)

GET /getnotes: Retrieve all notes.

POST /create: Create a new note.

PUT /update/****:id: Update an existing note by ID.

DELETE /delete/****:id: Delete a note by ID.

Deployment Details

Frontend Deployment

Hosted on Netlify: Visit Frontend

Steps:

Push the frontend code to GitHub.

Connect the repository to Netlify.

Configure the build settings (npm run build).

Deploy.

Backend Deployment

Hosted on Render: Visit Backend

Steps:

Push the backend code to GitHub.

Connect the repository to Render.

Set environment variables in Render dashboard.

Deploy.

Usage

Visit the frontend application here.

Register or log in.

Create, edit, or delete notes as needed.

Toggle dark mode for a personalized experience.

Security

Helmet: Used to set secure HTTP headers.

CORS: Configured dynamically to allow only specific origins.

Environment Variables: Secrets and sensitive data are stored securely.

Contributing

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes and push to the branch.

Open a pull request.

License

This project is licensed under the MIT License.

Contact

For any questions or issues, please reach out to the maintainer of this project.

Ajay yadav 

6387239637

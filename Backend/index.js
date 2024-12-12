import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';  // Import helmet
import DbCon from './config/db.js';
import AuthRoutes from './routes/Auth.js';
import NotesRoutes from './routes/Notes.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

DbCon();

// Use helmet for basic security
app.use(helmet());

// CORS setup
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'  // Replace with your frontend URL
}));

// Middleware
app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/auth', AuthRoutes);
app.use('/notes', NotesRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Hello from backend');
});

// Start server
app.listen(PORT, () => {
    console.log(`App is running on Port ${PORT}`);
});

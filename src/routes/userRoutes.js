import express from 'express';
import { signup, login } from '../controllers/userController.js';

const router = express.Router(); // Create a new router instance from express, this will allow us to define routes for user-related operations

router.post('/signup', signup);// Route for user signup
// Route for user signup, this will handle the POST request to /signup and call the signup function from userController.js
router.post('/login', login);// Route for user login
// Route for user login, this will handle the POST request to /login and call the login function from userController.js

export default router;
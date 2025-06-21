import db from '../db.js'; // Import the database connection from db.js
import {v4 as uuidv4} from 'uuid'; // Import uuid to generate unique IDs
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
import jwt from 'jsonwebtoken'; // Import jsonwebtoken for token generation

const JWT_SECRET = 'It_is_a_secret'; // Secret key for JWT, should be stored securely in environment variables it should not be hardcoded in production code enable better security practices

// Get all users
export const signup= async(req, res) => {
    const{username,password} =req.body;
    const id = uuidv4(); // Generate a new UUID for the user ID
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with bcrypt, 10 is the salt rounds
    try {
        await db.execute('INSERT INTO users (id, username, password) VALUES (?, ?, ?)', [id, username, hashedPassword]);// Insert the new user into the database with hashed password
        res.status(201).json({ message: 'User created successfully', userId: id });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Signup failed' });
    }
} // Function to handle user signup

export const login = async (req, res) => {
    const {username ,password} = req.body; // Extract username and password from the request body
    try{
        const[rows] =await db.execute('SELECT * FROM users WHERE username = ?', [username]); // Query the database to find the user by username
        if (rows.length === 0) {// If no user is found, send a 404 status code with an error message
            return res.status(404).json({ message: 'User not found' }); // If no user is found, send a 404 status code with an error message
        }
        const user = rows[0]; // Get the first user from the result set
        const isMatch = await bcrypt.compare(password, user.password); // Compare the provided password with the hashed password in the database
        if (!isMatch) { // If the passwords do not match, send a 401 status code with an error message
            return res.status(401).json({ message: 'Invalid password' }); // If the passwords do not match, send a 401 status code with an error message
        }
        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
        //jwt.sign is used to create a JSON Web Token (JWT) that contains the user's ID and username, signed with a secret key and set to expire in 1 hour
        // Generate a JWT token with the user's ID and username, expires in 1 hour jwt token is used for authentication and authorization where the token is signed with a secret key and contains user information which can be verified later.
        res.json({ token    }); // Send the token and user information in the response res.json is used to send a JSON response back to the client token is used to authenticate the user in subsequent requests and given the user information to the client for display or further processing
    }
    catch (error) {
        console.error('Error logging in:', error); // Log the error to the console for debugging purposes
        res.status(500).json({ message: 'Login failed' }); // If an error occurs, send a 500 status code with an error message
    }
};
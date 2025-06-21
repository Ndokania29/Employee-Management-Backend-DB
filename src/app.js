import express from 'express';
import cors from 'cors'; // Import CORS middleware to handle cross-origin requests
import userRoutes from './routes/userRoutes.js'; // Import user routes
import departmentRoutes from './routes/departmentRoutes.js'; // Import department routes
import employeeRoutes from './routes/employeeRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import employeeProjectRoutes from './routes/employeeProjectRoutes.js'; // Import employee project routes
import statsRoutes from './routes/statsRoutes.js'; // Import stats routes
// Description: This file sets up the Express application and connects all the routes to the app at one place.

const app=express(); // Create an instance of the express application

app.use(cors()); // Use CORS middleware to allow cross-origin requests
// CORS (Cross-Origin Resource Sharing) is a security feature that allows or restricts resources
app.use(express.json()); // Middleware to parse JSON request bodies
app.use('/users', userRoutes); // Mount user routes at /users
app.use('/departments', departmentRoutes); // Mount department routes at /departments
app.use('/employees', employeeRoutes); // Mount employee routes at /employees
app.use('/projects', projectRoutes);
app.use('/employee-projects', employeeProjectRoutes); // Mount employee project routes at /employee-projects
app.use('/stats', statsRoutes); // Mount stats routes at /stats
app.listen(5000, () => { // Start the server on port 3000
    console.log('Server running on http://localhost:5000'); // Log a message indicating the server is running
});

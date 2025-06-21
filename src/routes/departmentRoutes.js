import express from 'express';
import authenticateToken from '../middleware/authMiddleware.js'; // Import middleware to authenticate tokens
// Import necessary modules and functions for department routes 
import {
    getDepartments,
    createDepartment
} from '../controllers/departmentController.js'; // Import department controller functions
const router=express.Router(); // Create a new router instance from express
// Define routes for department-related operations
router.post('/',authenticateToken,createDepartment); // POST /departments - Create a new department
router.get('/',authenticateToken,getDepartments); // GET /departments - Get all departments     
// Export the router so that it can be used in other files, mainly in app.js to define the routes for department-related operations
export default router; // Export the router instance    
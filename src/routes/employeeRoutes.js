import express from 'express';
import{ createEmployee, getEmployees} from '../controllers/employeeController.js';
import authenticateToken from'../middleware/authMiddleware.js';

const router =express.Router();
// Define the route for creating a new employee
router.post('/', authenticateToken, createEmployee); // Use the authenticateToken middleware to protect this route
// Define the route for getting all employees
router.get('/', authenticateToken, getEmployees); // Use the authenticateToken middleware to protect this route
// Export the router to be used in the main application
export default router;


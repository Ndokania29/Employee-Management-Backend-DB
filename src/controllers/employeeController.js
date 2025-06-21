import db from '../db.js';
import { v4 as uuidv4 } from 'uuid';
// Import the database connection and UUID generator    
// Create a new employee
export const createEmployee =async(req, res) => {
    const{ name, email,department_id} =req.body;
    const id=uuidv4(); // Generate a new UUID for the employee ID
    try{
        await db.execute(
            'INSERT INTO employees(id,name,email,department_id) VALUES(?,?,?,?)',
            [id, name, email, department_id] // Insert the new employee into the database
        );
        res.status(201).json({ id, name, email, department_id }); // Send a 201 status code with the created employee's ID, name, email, and department ID
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all employees
export const getEmployees =async(req, res)=>{
    try{
        const[rows]=await db.execute(`SELECT employees.*, departments.name AS department_name
            FROM employees
            LEFT JOIN departments ON employees.department_id=departments.id`
        ); // Fetch all employees with their department names using a LEFT JOIN
         res.json(rows); // Send the result as a JSON response
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
    // The LEFT JOIN is used to combine rows from the employees table with the departments table based on the department_id
    //LEFT JOIN = It returns all records from the left table (employees) and the matched records from the right table (departments). If there is no match, NULL values are returned for the right table's columns.
    // departments on employees.department_id=departments.id is the condition for the join, where employees.department_id matches departments.id
   


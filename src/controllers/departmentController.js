import db from '../db.js';
import { v4 as uuidv4 } from 'uuid';

// Create department
export const createDepartment = async (req, res) => {// Function to create a new department in the database
  const { name } = req.body;// Extract the department name from the request body
  const id = uuidv4();// Generate a new UUID for the department ID
  try {
    await db.execute('INSERT INTO departments (id, name) VALUES (?, ?)', [id, name]);// Insert the new department into the database
    // The execute method is used to run a SQL query with parameters to prevent SQL injection
    res.status(201).json({ id, name });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create department' });
  }
};

// Get all departments
export const getDepartments = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM departments');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch departments' });
  }
};
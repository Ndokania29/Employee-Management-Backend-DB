import db from '../db.js';

// Assign employee to a project
export const assignEmployeeToProject = async (req, res) => {
  const { employee_id, project_id } = req.body;
  if (!employee_id || !project_id) {
    return res.status(400).json({ error: 'employee_id and project_id are required' });
  }
  try {
    await db.execute(
      'INSERT INTO employee_projects (employee_id, project_id) VALUES (?, ?)',
      [employee_id, project_id]
    );
    res.status(201).json({ message: 'Employee assigned to project' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to assign employee to project' });
  }
};

// Get all projects for an employee
export const getProjectsForEmployee = async (req, res) => {
  const { employee_id } = req.params;
  try {
    const [rows] = await db.execute(
      `SELECT projects.* FROM projects
       JOIN employee_projects ON projects.id = employee_projects.project_id
       WHERE employee_projects.employee_id = ?`,
      [employee_id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects for employee' });
  }
};

// Get all employees for a project
export const getEmployeesForProject = async (req, res) => {
  const { project_id } = req.params;
  try {
    const [rows] = await db.execute(
      `SELECT employees.* FROM employees
       JOIN employee_projects ON employees.id = employee_projects.employee_id
       WHERE employee_projects.project_id = ?`,
      [project_id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch employees for project' });
  }
};
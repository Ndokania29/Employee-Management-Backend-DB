import db from '../db.js'; // Your MySQL connection

export const getStatsCounts = async (req, res) => {
  try {
    // Example using mysql2/promise
    const [projectsRows] = await db.query('SELECT COUNT(*) AS count FROM projects');
    const [departmentsRows] = await db.query('SELECT COUNT(*) AS count FROM departments');
    const [employeesRows] = await db.query('SELECT COUNT(*) AS count FROM employees');
    // If you have a status column for ongoing projects:
    

    res.json({
      projects: projectsRows[0].count,
      departments: departmentsRows[0].count,
      employees: employeesRows[0].count,
      
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};
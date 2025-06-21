import express from 'express';
import {
  assignEmployeeToProject,
  getProjectsForEmployee,
  getEmployeesForProject
} from '../controllers/employeeProjectController.js';
import authenticateToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/assign', authenticateToken, assignEmployeeToProject);
router.get('/employee/:employee_id', authenticateToken, getProjectsForEmployee);
router.get('/project/:project_id', authenticateToken, getEmployeesForProject);

export default router;
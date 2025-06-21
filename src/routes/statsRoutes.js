import express from 'express';
import authenticateToken from '../middleware/authMiddleware.js'; 
import { getStatsCounts } from '../controllers/statsController.js';

const router = express.Router();
router.get('/counts',authenticateToken, getStatsCounts);
export default router;


import express from 'express';
import { getWeekly } from '../controllers/weeklyController.js';
const router = express.Router();
router.get('/', getWeekly);
export default router;

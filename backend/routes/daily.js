import express from 'express';
import { getDailyController } from '../controllers/dailyController.js';
const router = express.Router();
router.get('/', getDailyController);
export default router;

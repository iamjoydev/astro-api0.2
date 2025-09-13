import express from 'express';
import { getKundli } from '../controllers/kundliController.js';
const router = express.Router();
router.get('/', getKundli);
export default router;

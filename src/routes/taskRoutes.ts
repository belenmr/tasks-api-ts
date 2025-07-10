import { Router } from 'express';
import * as taskController from '../controllers/taskController';

const router = Router();

router.get('/', taskController.getAllTasks);

export default router;
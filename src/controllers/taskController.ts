import { Request, Response } from 'express';
import * as taskService from '../services/taskService';

export function getAllTasks(req: Request, res: Response) {
	const tasks = taskService.getTasks();
	res.json(tasks);
}
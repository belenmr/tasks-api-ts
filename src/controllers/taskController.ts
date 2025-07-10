import { Request, Response } from 'express';
import * as taskService from '../services/taskService';

export function getAllTasks(req: Request, res: Response) {
	const tasks = taskService.getTasks();

	res.json(tasks);
}

export function createTask(req: Request, res: Response) {
	const { title, description } = req.body;

	if (!title) {
    	return res.status(400).json({ error: 'Title is required' });
  	}

  	const task = taskService.createTask(title, description || '');

  	res.status(201).json(task);
}
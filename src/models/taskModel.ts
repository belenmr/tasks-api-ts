import db from '../db';
import { Task } from './Task';
import { randomUUID } from 'crypto';

export function getAllTasks(): Task[] {
    const rows = db.prepare('SELECT * FROM tasks').all() as Task[];

    return rows.map(row => ({
        ...row,
        completed: !!row.completed,
    }));
}

function getTaskById(id: string): Task | undefined {
	const row = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id) as Task;
	row.completed = !!row.completed
	
	return row ? row : undefined;
}

export function createTask(title: string, description: string): Task {
	const id = randomUUID();
	const newTask = 0;
	const createdAt = new Date().toISOString();
	db.prepare(
    	'INSERT INTO tasks (id, title, description, completed, createdAt) VALUES (?, ?, ?, ?, ?)'
  	).run(id, title, description, newTask, createdAt);
  
	return getTaskById(id)!;
}
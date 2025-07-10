import db from '../db';
import { Task } from './Task';

export function getAllTasks(): Task[] {
    const rows = db.prepare('SELECT * FROM tasks').all() as Task[];

    return rows.map(row => ({
        ...row,
        completed: !!row.completed,
    }));
}
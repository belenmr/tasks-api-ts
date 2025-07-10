import { Task } from '../models/Task';
import * as taskModel from '../models/taskModel';

export function getTasks(): Task[] {
    return taskModel.getAllTasks();
}

export function createTask(title: string, description: string): Task {
    return taskModel.createTask(title, description);
}
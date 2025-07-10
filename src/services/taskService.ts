import { Task } from '../models/Task';
import * as taskModel from '../models/taskModel';

export function getTasks(): Task[] {
    return taskModel.getAllTasks();
}
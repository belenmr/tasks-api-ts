export interface Task {
	id: string;
	title: string;
	description: string;
	completed: boolean;
	createdAt: string; // SQLite no tiene tipo Date
}

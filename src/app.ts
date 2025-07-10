import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api/tasks', taskRoutes);

// Server
app.listen(PORT, () => {
	console.log(`Server is listening on port: ${PORT}`);
});

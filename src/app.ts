import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Test
app.get('/', (req: Request, res: Response) => {
  res.send('Esto es una prueba');
});

// Server
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

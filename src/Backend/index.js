import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import usuarioRouter from './routes/usuario.route.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/usuario', usuarioRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`El servidor se está ejecutando en el puerto: ${PORT}`);
});


import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from '../../shared/config/mongodb.js';
import authRouter from './routes/authRoute.js';
import logger from '../../shared/utils/logger.js';

const app = express();
const port = process.env.PORT || 4001;

connectDB();

app.use(express.json());
app.use(cors());

// Auth Routes
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send('Auth Service Working');
});

app.listen(port, () => logger.info(`Auth Service started on port ${port}`));

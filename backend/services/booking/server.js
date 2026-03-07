import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from '../../shared/config/mongodb.js';
import bookingRouter from './routes/bookingRoute.js';
import logger from '../../shared/utils/logger.js';
import { createClient } from 'redis';

const app = express();
const port = process.env.PORT || 4002;

// Redis Setup
const redisClient = createClient({ url: process.env.REDIS_URL });
redisClient.on('error', (err) => logger.error('Redis Client Error', err));
await redisClient.connect();

connectDB();

app.use(express.json());
app.use(cors());

// Context for routes (sharing redis client)
app.use((req, res, next) => {
    req.redis = redisClient;
    next();
});

// Booking Routes
app.use('/api/booking', bookingRouter);

app.get('/', (req, res) => {
    res.send('Booking Service Working');
});

app.listen(port, () => logger.info(`Booking Service started on port ${port}`));

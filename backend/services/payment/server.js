import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from '../../shared/config/mongodb.js';
import paymentRouter from './routes/paymentRoute.js';
import logger from '../../shared/utils/logger.js';

const app = express();
const port = process.env.PORT || 4003;

connectDB();

app.use(express.json());
app.use(cors());

// Payment Routes
app.use('/api/payment', paymentRouter);

app.get('/', (req, res) => {
    res.send('Payment Service Working');
});

app.listen(port, () => logger.info(`Payment Service started on port ${port}`));

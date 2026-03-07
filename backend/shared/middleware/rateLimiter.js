import rateLimit from 'express-rate-limit';

const bookingLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 10 requests per windowMs
    message: { success: false, message: 'Too many booking attempts, please try again later' },
    standardHeaders: true,
    legacyHeaders: false,
});

export default bookingLimiter;

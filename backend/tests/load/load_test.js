import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 100 }, // ramp up to 100 users
        { duration: '20s', target: 100 }, // stay at 100 users
    ],
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
        http_req_failed: ['rate<0.01'],    // Error rate should be less than 1%
    },
};

// Configuration
const BASE_URL = 'http://localhost:4002'; // Booking Service Port
const AUTH_TOKEN = __ENV.AUTH_TOKEN || 'YOUR_JWT_TOKEN_HERE';
const DOCTOR_ID = __ENV.DOCTOR_ID || 'YOUR_DOCTOR_ID_HERE';

export default function () {
    const url = `${BASE_URL}/api/booking/book`;
    const payload = JSON.parse(JSON.stringify({
        docId: DOCTOR_ID,
        slotDate: '20-10-2024',
        slotTime: `${Math.floor(Math.random() * 8 + 10)}:00 PM` // Dynamic slot to test concurrency
    }));

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'token': AUTH_TOKEN,
        },
    };

    const res = http.post(url, JSON.stringify(payload), params);

    check(res, {
        'status is 200': (r) => r.status === 200,
        'success is true': (r) => r.json().success === true,
    });

    sleep(1);
}

import express from 'express';
import Redis from 'ioredis';
import process from 'process';

const app = express();
const port = process.env.SERVER_PORT || 3000;

// Create a Redis client
const redis = new Redis({
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
});
redis.set('visits', 0);

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/', (req, res) => {
    process.exit(1);
});

app.get('/visits', async (req, res) => {
    const visits = await redis.get('visits');

    if (visits) {
        res.json({ visits: parseInt(visits) });
        redis.set('visits', +visits + 1);
    } else {
        res.json({ visits: 0 });
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
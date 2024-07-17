import express from 'express';

const app = express();

// 1° endpoint com método get
app.get('/health', (req, res) => {
    res.send('Hello world')
})

export default app;

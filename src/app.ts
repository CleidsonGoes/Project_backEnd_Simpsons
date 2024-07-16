import express from 'express';
import CastModel from './models/cast';

const app = express();

// 1° endpoint com método get
app.get('/health', (req, res) => {
    res.send('Hello world')
})

app.get('/testCastModel', async (req, res) => {
    const castModel = new CastModel();
    const casts = await castModel.list();
    res.send(casts)
})

export default app;
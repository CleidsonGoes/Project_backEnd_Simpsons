import express from 'express';
import * as routers from './routes';


const app = express();

// 1° endpoint com método get
app.get('/health', (req, res) => {
    res.send('Hello world')
})

app.use('/characters', routers.characterRouter);
app.use('/casts', routers.castRouter);
app.use('/castCharacters', routers.castCharacterRouter);

export default app;

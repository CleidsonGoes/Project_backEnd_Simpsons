import express, { Request, Response, NextFunction } from 'express';
import * as routers from './routes';
import BaseHTTPError from './errors/httpError';


const app = express();

app.use(express.json());

// 1° endpoint com método get
app.get('/health', (req, res) => {
    res.send('Hello world')
})

app.use('/characters', routers.characterRouter);
app.use('/casts', routers.castRouter);
app.use('/castCharacters', routers.castCharacterRouter);

app.use((err: BaseHTTPError, _: Request, res: Response, __: NextFunction) => {
    if (err.statusCode) {
      return res.status(err.statusCode).json({ message: err.message });
    }
    // eslint-disable-next-line no-console
    console.error(err.message);
    return res.status(500).json({ message: 'Erro interno' });
  });


export default app;

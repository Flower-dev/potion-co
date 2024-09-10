import express, { Request, Response } from 'express';

const server = express();
const port: number = 8000;

server.get('/hello', (req: Request, res: Response): void => {
    res.send("Hello World");
});

server.listen(port, (): void => {
    console.log(`Listening on port ${port}`);
});

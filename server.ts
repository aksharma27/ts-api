import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();

const host: string = '127.0.0.1';
const port: number = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send("TS express server");
});

app.listen(port, host, () => {
    console.log(`TS express server listening on https://${host}:${port}`);
})
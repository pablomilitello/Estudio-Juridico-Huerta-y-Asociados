import express from 'express';
import mailRouter from './routes/mail.routes.js';
import { __dirname } from './utils.js';
import cors from 'cors';

const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.use('/', mailRouter);

app.listen(PORT, () => {
  console.log(`Listen in port ${PORT}`);
});

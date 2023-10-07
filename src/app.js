import express from 'express';
import mailRouter from './routes/mail.routers.js';
import { __dirname } from './utils.js';
import cors from 'cors';
import handlebars from 'express-handlebars';
import { PORT } from './config.js';

const app = express();

//Configuración Middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname + '/public'));

//Configuración Handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use('/contact', mailRouter);

app.listen(PORT, () => {
  console.log(`Listen in port ${PORT}`);
});

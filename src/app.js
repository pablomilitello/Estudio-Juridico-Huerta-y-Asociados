import express from 'express';
import mailRouter from './routes/mail.routes.js';
import { __dirname } from './utils.js';
import cors from 'cors';
import viewsRouter from './routes/views.routes.js';
import handlebars from 'express-handlebars';

const PORT = 8080;

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

app.use('/', mailRouter);
app.use('/views', viewsRouter);

app.listen(PORT, () => {
  console.log(`Listen in port ${PORT}`);
});

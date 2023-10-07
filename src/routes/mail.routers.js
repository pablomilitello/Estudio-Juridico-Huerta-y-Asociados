import { Router } from 'express';
import { transporter } from '../utils/nodemailer.js';

const router = Router();

const arrayInfo = [];

router.post('/', async (req, res) => {
  let info = req.body;

  const mailOwner = {
    from: 'coderhousemailer@gmail.com',
    to: 'mariacarolinahuerta@gmail.com',
    subject: 'Consulta Jurídica',
    text: `Nombre: ${info.nameForm} Apellido: ${info.lastnameForm} Email: ${info.emailForm} Consulta: ${info.commentForm}`,
    template: 'sendMail',
  };
  transporter.sendMail(mailOwner, (err, info) => {
    if (err) {
      console.log('error');
    }
  });

  const mailClient = {
    from: 'coderhousemailer@gmail.com',
    to: info.emailForm,
    subject: 'Consulta Jurídica',
    text: `${info.nameForm} ${info.lastnameForm} tu consulta fue ingresada con éxito.`,
    template: 'sendMail',
  };
  transporter.sendMail(mailClient, (err, info) => {
    if (err) {
      console.log('error');
    }
  });
});

export default router;

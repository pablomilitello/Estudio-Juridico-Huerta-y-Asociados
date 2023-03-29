import { Router } from 'express';

const router = Router();

const arrayInfo = [];

router.get('/', (req, res) => {
  res.send('HOLA DESDE EL BACKEND USANDO ROUTES');
});

router.post('/inputData', (req, res) => {
  let info = req.body;
  arrayInfo.push(info);
  console.log(arrayInfo);
  res.send('Info guardada con éxito!');
});

export default router;

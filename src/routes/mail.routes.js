import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('HOLA DESDE EL BACKEND USANDO ROUTES');
});

router.post('/', (req, res) => {
  res.send('está llengando algo desde post');
  const info = req.body;
  console.log(info);
});

export default router;

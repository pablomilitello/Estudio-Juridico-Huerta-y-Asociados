import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('HOLA DESDE EL BACKEND USANDO ROUTES');
});

router.post('/inputData', (req, res) => {
  console.log(req.body);
});

export default router;

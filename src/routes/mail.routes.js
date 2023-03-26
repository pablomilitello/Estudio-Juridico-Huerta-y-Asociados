import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('HOLA DESDE EL BACKEND USANDO ROUTES');
});

export default router;

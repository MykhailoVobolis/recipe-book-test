import { Router } from 'express';
import recipesRouter from './recipes';

const router = Router();

router.use('/recipes', recipesRouter);

export default router;

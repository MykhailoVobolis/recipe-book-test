import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { env } from './utils/env';
import { notFoundHandler } from './middlewares/notFoundHandler';
import { errorHandler } from './middlewares/errorHandler';
import router from './routers/index';

dotenv.config();

const PORT: string = env('PORT', '3000');

export const startServer = () => {
  const app = express();

  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
      limit: '100kb',
    }),
  );

  app.use(cors());

  app.use(router);

  app.use(/(.*)/, notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

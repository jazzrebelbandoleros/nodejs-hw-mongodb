import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { logger } from './middlewars/logger.js';
import contactsRouter from './routers/contacts.js';
import { errorHandler } from './middlewars/errorHandler.js';
import { notFoundHandler } from './middlewars/notFoundHandler.js';

dotenv.config();
const PORT = Number(process.env.PORT) || 3000;

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(logger);
  app.use(contactsRouter);
  app.use('*', notFoundHandler);
  app.use(errorHandler);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

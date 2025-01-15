import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import router from './routers/index.js';
import { logger } from './middlewars/logger.js';
import { errorHandler } from './middlewars/errorHandler.js';
import { notFoundHandler } from './middlewars/notFoundHandler.js';
import { UPLOAD_DIR } from './constants/index.js';

dotenv.config();
const PORT = Number(process.env.PORT) || 3000;

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  app.use(logger);
  app.use(router);
  app.use('*', notFoundHandler);
  app.use(errorHandler);
  app.use('/uploads', express.static(UPLOAD_DIR));
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

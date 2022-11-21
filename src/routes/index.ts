import { Router } from 'express';
import { publicPingRouter } from './ping.route';

export const globalRouter = Router();

globalRouter.use(publicPingRouter);

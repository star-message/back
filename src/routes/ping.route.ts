import { Router } from 'express';
import { PingController } from '../controllers/ping.controller';

export const publicPingRouter = Router();
const pingController = new PingController();

publicPingRouter.get('/ping', pingController.pongTest);

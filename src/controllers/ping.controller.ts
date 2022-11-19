import { NextFunction, Request, Response } from 'express';

export class PingController {
  pongTest(req: Request, res: Response, next: NextFunction) {
    return res.send('pong');
  }
}

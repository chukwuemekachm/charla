import { Response, Request, NextFunction } from 'express-serve-static-core';

import Controller from './Controller';

export default class ChatController extends Controller {
  constructor(io: SocketIO.Server) {
    super(io);
  }

  async postMessage({ user, body }: Request, res: Response, next: NextFunction) {
    return res.json({ user });
  }

  async getConversation({ user, body }: Request, res: Response, next: NextFunction) {
    return res.json({ user });
  }
}

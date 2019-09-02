import { Application } from 'express';

import { autheticateUser } from '../middlewares/permission.middleware';
import ChatController from '../controllers/ChatController';

export function chatRoutes(app: Application, io: SocketIO.Server) {
  const chatController = new ChatController(io);

  app.get('/api/v1/conversation/:contactId', autheticateUser);
}

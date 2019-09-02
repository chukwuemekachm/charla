import { Application } from 'express';
import { authRoutes } from './auth.routes';
import { chatRoutes } from './chat.routes';

export function initializeRoutes(app: Application, io: SocketIO.Server) {
  authRoutes(app, io);
  chatRoutes(app, io);

  app.use((error, req, resp, next) => {
    return resp.status(500).json({
      message: 'Internal Server error',
    });
  });
}

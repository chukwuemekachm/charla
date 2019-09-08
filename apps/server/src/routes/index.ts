import { Application } from 'express';

import { authRoutes } from './auth.routes';
import { chatRoutes } from './chat.routes';
import { contactRoutes } from './contact.routes';

export function initializeRoutes(app: Application, io: SocketIO.Server) {
  authRoutes(app, io);
  chatRoutes(app, io);
  contactRoutes(app, io);

  app.all('*', (req, res) => res.json({
    message: 'Route Un-available'
  }));

  app.use((error, req, resp, next) => {
    return resp.status(500).json({
      message: 'Internal Server error',
    });
  });
}

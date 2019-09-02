import passport from 'passport';
import { Application } from 'express';

import AuthController from '../controllers/AuthController';

export function authRoutes(app: Application, io: SocketIO.Server) {
  const authController = new AuthController(io);

  app.get('/api/v1/oauth/google', passport.authenticate('google'));
  app.get('/api/v1/oauth/google-callback', passport.authenticate('google'), authController.login);
}

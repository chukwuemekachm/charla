import passport from 'passport';
import { Application } from 'express';

import AuthController from '../controllers/AuthController';

export function authRoutes(app: Application, io: SocketIO.Server) {
  const authController = new AuthController(io);
  const baseURL = '/api/v1';

  app.get(`${baseURL}/oauth/google`, passport.authenticate('google'));
  app.get(`${baseURL}/oauth/google-callback`, passport.authenticate('google'), authController.login);
}

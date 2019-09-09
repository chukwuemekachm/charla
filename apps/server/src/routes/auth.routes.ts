import passport from 'passport';
import { Application } from 'express';

import AuthController from '../controllers/AuthController';
import { autheticateUser } from '../middlewares/permission.middleware';

export function authRoutes(app: Application, io: SocketIO.Server) {
  const authController = new AuthController(io);
  const baseURL = '/api/v1';

  app.get(`${baseURL}/oauth/google`, passport.authenticate('google'));
  app.get(`${baseURL}/oauth/google-callback`, passport.authenticate('google'), authController.login);

  app.get(`${baseURL}/me`, autheticateUser, authController.getUserProfile);
  app.put(`${baseURL}/me`, autheticateUser, authController.updateUserProfile);
}

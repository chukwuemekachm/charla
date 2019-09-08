import { Application } from 'express';

import ContactController from '../controllers/ContactController';
import { autheticateUser } from '../middlewares/permission.middleware';

export function contactRoutes(app: Application, io: SocketIO.Server) {
  const contactController = new ContactController(io);
  const baseURL = '/api/v1';

  app.get(`${baseURL}/contacts`, autheticateUser, contactController.getUserContacts);
  app.post(`${baseURL}/contacts`, autheticateUser, contactController.addContact);
  // app.get(`${baseURL}/contacts/:contactId`, autheticateUser, authController.getMyProfile);
  // app.delete(`${baseURL}/contacts/:contactId`, autheticateUser, authController.getMyProfile);
}

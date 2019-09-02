import { Application } from 'express';

export function chatRoutes(app: Application, io: SocketIO.Server) {
  return { app, io };
}

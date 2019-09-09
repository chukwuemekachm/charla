import 'dotenv/config';
import http from 'http';
import express from 'express';
import Socket from 'socket.io';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import { initializeRoutes } from './routes';
import { initializeOAuth } from './config/oauth';

const app = express();

// Body parser and helmet middleware
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize OAuth2.0 flows
initializeOAuth(app);

const server = http.createServer(app);
const io = Socket(server);

// Initialize app Routes
initializeRoutes(app, io);

export default server;

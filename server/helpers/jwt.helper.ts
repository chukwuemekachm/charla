import * as JWT from 'jsonwebtoken';
import { Request } from 'express-serve-static-core';

interface Payload {
  email: string;
  id?: string;
}

const { APP_SECRET = 'secret' } = process.env;

export function generateToken(payload: Payload) {
  return JWT.sign(payload, APP_SECRET, { expiresIn: '72h' });
}

export function decodeToken(req: Request) {
  try {
    const authorization = req.get('Authorization');

    if (authorization) {
      const token = authorization.replace('Bearer ', '');
      return JWT.verify(token, APP_SECRET);
    }

    return false;
  } catch (error) {
    return false;
  }
}

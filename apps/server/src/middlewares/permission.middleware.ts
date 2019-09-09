import { Response, Request, NextFunction } from 'express-serve-static-core';

import { decodeToken } from '../helpers/jwt.helper';

export function autheticateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const decoded = decodeToken(req);
    if (!decoded) {
      return res.json({
        message: 'Authentication is required for this operation',
      });
    }
    req.user = decoded;
    return next();
  } catch (error) {
    return next(error);
  }
}

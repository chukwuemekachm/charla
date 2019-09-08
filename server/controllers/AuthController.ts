import { Response, Request, NextFunction } from 'express-serve-static-core';

import Controller from './Controller';
import { User } from '../database';
import { generateToken } from '../helpers/jwt.helper';
import { IUser } from '../database/schemas/user.schema';
import { throws } from 'assert';

export default class AuthController extends Controller {
  constructor(io: SocketIO.Server) {
    super(io);
    this.getUserProfile = this.getUserProfile.bind(this);
  }

  async login({ user }: any, res: Response, next: NextFunction) {
    const existingUser = await User.findOne({ email: user.email });
    let newUser: IUser;

    if (!existingUser) {
      newUser = new User({ ...user });
      await newUser.save();
    }

    const token = generateToken({
      id: existingUser ? existingUser._id : newUser._id,
      email: existingUser ? existingUser.email : newUser.email,
    });

    return res.json({
      message: `${user.first_name} authenticated successfully`,
      data: {
        ...user,
        token,
      },
    });
  }

  async getUserProfile({ user: { id } }: any, res: Response, next: NextFunction) {
    const profile = await User.findById(id);

    return res.json({
      message: `${profile.first_name}'s profile retrieved successfully`,
      data: this.trimUser(profile),
    });
  }
}

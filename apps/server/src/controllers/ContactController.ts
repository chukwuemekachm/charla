import { Response, NextFunction } from 'express-serve-static-core';

import Controller from './Controller';
import { User } from '../database';
import { IUser } from '../database/schemas/user.schema';

export default class ContactController extends Controller {
  constructor(io: SocketIO.Server) {
    super(io);
    this.getUserContacts = this.getUserContacts.bind(this);
  }

  async getUserContacts({ user: { id } }: any, res: Response, next: NextFunction) {
    const { contacts, first_name } = await User.findById(id).populate('contacts');

    return res.json({
      message: `${first_name}'s contacts retrieved successfully.`,
      data: contacts.map(contact => this.trimUser(<IUser>(<any>contact))),
    });
  }

  async addContact({ user: { id }, body: { email } }: any, res: Response, next: NextFunction) {
    const contact = await User.findOne({ email });
    const user = await User.findById(id);

    if (contact) {
      if (!user.contacts.includes(contact._id)) {
        await User.findByIdAndUpdate(id, { $push: { contacts: contact._id } });
      }

      return res.json({
        message: `${contact.first_name} successfully added to your contacts.`,
      });
    }

    return res.json({
      message: `User with email ${email} not found.`,
    });
  }

  async deleteContact({ user: { id }, body: { email } }: any, res: Response, next: NextFunction) {
    const contact = await User.findOne({ email });
    const user = await User.findById(id);

    if (contact) {
      if (user.contacts.includes(contact._id)) {
        await User.findByIdAndUpdate(id, { $pull: { contacts: contact._id } });

        return res.json({
          message: `${contact.first_name} has been successfully deleted from your contacts.`,
        });
      }
    }

    return res.json({
      message: `User with email ${email} not found.`,
    });
  }
}

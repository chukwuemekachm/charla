import { IUser } from '../database/schemas/user.schema';
import { IChat } from '../database/schemas/chat.schema';

export default abstract class Controller {
  private io: SocketIO.Server;

  constructor(io: SocketIO.Server) {
    this.io = io;
  }

  publish(event: string, data: any) {
    this.io.emit(event, data);
  }

  trimUser(user: IUser) {
    const {
      _id, first_name, last_name, email, image_url, created_at, updated_at,
    } = user;

    return {
      id: _id,
      first_name,
      last_name,
      email,
      image_url,
      created_at,
      updated_at,
    };
  }

  trimChat(chat: IChat) {
    const {
      _id, body, sender_id, receiver_id, created_at, updated_at,
    } = chat;

    return {
      id: _id,
      body,
      sender_id,
      receiver_id,
      created_at,
      updated_at,
    };
  }
}

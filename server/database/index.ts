import mongoose from 'mongoose';

import userSchema, { IUser } from './schemas/user.schema';
import chatSchema, { IChat } from './schemas/chat.schema';

const { DATABASE_URL = '' } = process.env;

const connectionMessage = `
*********************************

  Mongodb connection successful

*********************************
`;

export const User = mongoose.model<IUser>('User', userSchema);
export const Chat = mongoose.model<IChat>('Chat', chatSchema);

mongoose.connection.on('error', err => console.log(`Mongodb error \n${err}`));
mongoose.connection.once('open', () => console.log(connectionMessage));

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });

export default mongoose;

import { Schema, Types, Document } from 'mongoose';

export interface IUser extends Document {
  first_name: string;
  last_name: string;
  email: string;
  image_url: string;
  contacts: string[];
  created_at: string;
  updated_at: string;
}

export default new Schema({
  _id: { type: Schema.Types.ObjectId, default: new Types.ObjectId() },
  first_name: String,
  last_name: String,
  email: String,
  image_url: String,
  contacts: [Schema.Types.ObjectId],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

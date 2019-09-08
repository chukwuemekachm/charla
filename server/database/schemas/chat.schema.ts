import { Schema, Types, Document } from 'mongoose';

export interface IChat extends Document {
  body: string;
  sender_id: string;
  receiver_id: string;
  created_at: string;
  updated_at: string;
}

export default new Schema({
  _id: { type: Schema.Types.ObjectId, default: new Types.ObjectId() },
  body: String,
  sender_id: { type: Schema.Types.ObjectId, ref: 'User' },
  receiver_id: { type: Schema.Types.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  tempToken?: string; 
}

const userSchema: Schema<IUser> = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  tempToken: { type: String }, 
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;

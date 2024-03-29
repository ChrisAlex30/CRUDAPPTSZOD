import mongoose,{ Schema, InferSchemaType } from 'mongoose';


const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: String
  });
  
  export type User = InferSchemaType<typeof schema>;

  export const UserModel = mongoose.model('User', schema);






  
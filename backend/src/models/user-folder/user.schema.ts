import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { mongo } from 'mongoose';;
import { Role } from 'src/auth/roles/role.enum';
@Schema()
export class User {
  @Prop({ unique: true, default: new mongoose.Types.ObjectId() , type: mongoose.Schema.Types.ObjectId})
  id: mongoose.Types.ObjectId;
  @Prop()
  fullName: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop({type:String, default: Role.User})
  roles: string;

  @Prop({ default: false})
  isBlocked: boolean;

  @Prop()
  profilePicture: string;


  @Prop({type: Boolean, default: false})
  isVerified: boolean;

  @Prop()
  emailToken: string;

  

  
}

export const UserSchema = SchemaFactory.createForClass(User);


    import { Injectable } from "@nestjs/common";
    import { InjectModel } from "@nestjs/mongoose";
    import {Model} from 'mongoose';
    import {User} from "../models/user-folder/user.schema"
    import { AuthDto } from "src/auth/dto/auth.dto";
    



    @Injectable()
    export class DatabaseService{
        constructor(@InjectModel(User.name) private readonly userModel: Model<User>,
     
        ){}

        async findAll(): Promise<User[]>{
            return await this.userModel.find().exec();
        }
    
        async findOne(email: string): Promise<User>{
            console.log(this.userModel)
            return await this.userModel.findOne({email: email});
        }
    
        async createUser (createUserDto: AuthDto) : Promise<User>{
            const  newUser =  new this.userModel(createUserDto);
            return newUser.save();
            
        }

        // async createBookMark(user: User, title: string, url: string, description: string){
        //     console.log("A new bookmark is created ")
        //     return await this.bookmarkModel.create({user, title, url, description})
        // }
    
    }



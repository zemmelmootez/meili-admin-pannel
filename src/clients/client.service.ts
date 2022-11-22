import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Client } from './client.model';

@Injectable()
export class ClientService{

    constructor(@InjectModel('Client')private readonly clientModel: Model<Client>)
    {}
    

    async insertClient( email:  string,
        number:  string,
        birthday: string ,
        rating:number,
        devicetoken:string,
        location:object)
        {
            const newClient = new this.clientModel({email,number,birthday,rating,devicetoken,location})
            const result=await newClient.save()
            return result.id as String
        }
    async getClients(){
        const Clients=await this.clientModel.find().exec();
        return Clients.map(e=>({
            id:e.id,
            email:e.email}));

        
    }

   async getClient(name){
    
   }

}
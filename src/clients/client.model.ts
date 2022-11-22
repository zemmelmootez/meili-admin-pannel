import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({

  email: { type: String, required: true },
  number: { type: String},
  birthday: { type: Date },
  rating:{type:Number},
  devicetoken:{type:String},
  location:{type:Object},
  

});

export interface Client extends mongoose.Document {
    id:string;
    email:  string;
    number:  string;
    birthday: string ;
    rating:number;
    devicetoken:string;
    location:object
}

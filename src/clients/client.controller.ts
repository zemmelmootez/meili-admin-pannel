import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  import { ClientService } from './client.service';
  @Controller('clients')
  export class ClientController{
    constructor(private readonly clientService: ClientService) {}

    @Post()
    async addProduct(
      @Body('email') email: string,
      @Body('number') number: string,
      @Body('birthday') birthday: string,
      @Body('rating') rating:number,
      @Body('devicetoken') devicetoken:string,
      @Body('location') location:object
    ) {
      const generatedId = await this.clientService.insertClient(
        email,number,birthday,rating,devicetoken,location
      );
      return { id: generatedId };
    }
    @Get()
    async getClients(){
        const clients=await this.clientService.getClients()
        return clients
    }
}
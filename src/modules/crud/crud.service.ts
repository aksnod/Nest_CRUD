import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { AddDto } from "./dto/add.dto";
import { commonDto } from "./dto/update.dto";
import { Crud, CrudDocument } from "./entity/crud.entity";
import { InjectModel } from '@nestjs/mongoose';
import { messages } from "src/constants/message";


@Injectable()
export class CrudService{
    constructor(@InjectModel(Crud.name) private readonly model: Model<CrudDocument>){}
   
    async create_data(addDto:AddDto){
        try {
           const newData=await this.model.create(addDto);
           if(!newData)
           throw new InternalServerErrorException(messages.SERVER_ERROR);
           return {message:messages.DATA_SAVED,data:newData};

        } catch (error) {
            throw new Error(error.message);
            
        }
        
    }
   async update_data(updateDto:AddDto){
    
    //     console.log(objIndex);
        
    //     if(objIndex<0)
    //     return "data is not exist";
    //    this.data[objIndex]=updateDto;
    try {
        const isUpdate=await this.model.updateOne({email:updateDto.email},updateDto)
        if(isUpdate)
        return messages.DATA_UPDATED; 
        throw new Error(messages.NOT_FOUND_ERROR)
    } catch (error) {
        throw new Error(error.message)
    }
    
      
    }
    async delete_data(deleteDto:commonDto){
        const isDelete=await this.model.deleteOne({email:deleteDto.email});
        if(!isDelete)
        throw new NotFoundException(messages.NOT_FOUND_ERROR);

        return messages.DATA_DELETED;


    }
   async find_data(){
        try {
           const isData=await this.model.find();
           if(!isData)
           throw new NotFoundException(messages.NOT_FOUND_ERROR)
           return isData; 
        } catch (error) {
            throw new Error(error.message)
        }
    }
}
import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { CrudService } from "./crud.service";
import { AddDto } from "./dto/add.dto";
import { commonDto } from "./dto/update.dto";

@Controller()
export class CrudController{
    constructor(private readonly crudService:CrudService){

    }
    @Post()
    create_data(@Body() addDto:AddDto){
        return this.crudService.create_data(addDto)
    }

    @Post("update")
    update_data(@Body() updateDto:AddDto){
        return this.crudService.update_data(updateDto);
    }
    @Delete()
    delete_data(@Body() deleteDto:commonDto){
        return this.crudService.delete_data(deleteDto);
    }

    @Get()
    find_data(){
        return this.crudService.find_data();
    }

}
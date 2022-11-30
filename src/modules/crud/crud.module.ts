import { Module } from "@nestjs/common";
import { CrudController } from "./crud.controller";
import { CrudService } from "./crud.service";
import { Crud, CrudSchema } from "./entity/crud.entity";

import { MongooseModule } from '@nestjs/mongoose';
@Module({
    imports:[
        MongooseModule.forFeature([{ name: Crud.name, schema: CrudSchema }])
    ],
    controllers:[CrudController],
    providers:[CrudService]
})
export class CrudModule{}
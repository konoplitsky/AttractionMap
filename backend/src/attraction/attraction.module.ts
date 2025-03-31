import { Module } from "@nestjs/common";
import { AttractionController } from "./attraction.controller";
import { AttractionService } from "./attraction.service";
import { AttractionRepository } from "./attraction.repository";
import { FilesModule } from "../files/files.module";

@Module({
  imports: [FilesModule],
  controllers: [AttractionController],
  providers: [AttractionService, AttractionRepository],
})
export class AttractionModule {}

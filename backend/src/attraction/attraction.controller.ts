import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { AttractionService } from "./attraction.service";
import {
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { CreateAttractionDto } from "./dto/createAttraction.dto";
import { GetAttractionDto } from "./dto/getAttraction.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@ApiTags("Достопримечательность")
@Controller("/api/attraction")
export class AttractionController {
  constructor(private readonly attractionService: AttractionService) {}

  @ApiOperation({ summary: "Создать достопримечательность" })
  @ApiResponse({ status: 201, type: GetAttractionDto })
  @Post("")
  @UseInterceptors(FileInterceptor("photo"))
  @ApiConsumes("multipart/form-data")
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateAttractionDto, @UploadedFile() photo) {
    return this.attractionService.saveAttraction(dto, photo);
  }
}

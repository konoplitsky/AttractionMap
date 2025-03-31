import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { AttractionService } from './attraction.service';
import { ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAttractionDto } from './dto/createAttraction.dto';
import { GetAttractionDto } from './dto/getAttraction.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateAttractionDto } from './dto/updateAttraction';

@ApiTags('Достопримечательность')
@Controller('/api/attraction')
export class AttractionController {
  constructor(private readonly attractionService: AttractionService) {}

  @ApiOperation({ summary: 'Создать достопримечательность' })
  @ApiResponse({ status: 201, type: GetAttractionDto })
  @Post('')
  @UseInterceptors(FileInterceptor('photo'))
  @ApiConsumes('multipart/form-data')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateAttractionDto, @UploadedFile() photo) {
    return this.attractionService.saveAttraction(dto, photo);
  }

  @ApiOperation({ summary: 'Получить все достопримечательности' })
  @ApiResponse({ status: 200, type: [GetAttractionDto] })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.attractionService.getAttractions();
  }

  @ApiOperation({ summary: 'Получить достопримечательность' })
  @ApiResponse({ status: 200, type: GetAttractionDto })
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  getById(@Param('id') id: string) {
    return this.attractionService.getAttraction(id);
  }

  @ApiOperation({ summary: 'Изменить достопримечательность' })
  @ApiResponse({ status: 201, type: GetAttractionDto })
  @UseInterceptors(FileInterceptor('photo'))
  @ApiConsumes('multipart/form-data')
  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() dto: UpdateAttractionDto, @UploadedFile() photo) {
    return this.attractionService.updateAttraction(dto, photo);
  }

  @ApiOperation({ summary: 'Удалить достопримечательность' })
  @ApiResponse({ status: 204, description: 'Достопримечательность успешно удалена.' })
  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return this.attractionService.deleteAttraction(id);
  }
}

import { Injectable } from '@nestjs/common';
import { AttractionRepository } from './attraction.repository';
import { GetAttractionDto } from './dto/getAttraction.dto';
import { CreateAttractionDto } from './dto/createAttraction.dto';
import { FilesService } from '../files/files.service';
import { MapsHelper } from '../utils/helpers/MapsHelper';

interface IAttractionService {
  saveAttraction(dto: CreateAttractionDto, photo: any): Promise<GetAttractionDto>;
}

@Injectable()
export class AttractionService implements IAttractionService {
  constructor(
    private attractionRepository: AttractionRepository,
    private fileService: FilesService
  ) {}

  async saveAttraction(dto: CreateAttractionDto, photo: any): Promise<GetAttractionDto> {
    const fileName = await this.fileService.createFile(photo);
    const mapLink = MapsHelper.generateYandexMapsLink(dto.latitude, dto.longitude);

    return this.attractionRepository.saveAttraction({
      ...dto,
      photo: fileName,
      mapLink
    });
  }
}

import { Injectable } from '@nestjs/common';
import { AttractionRepository } from './attraction.repository';
import { GetAttractionDto } from './dto/getAttraction.dto';
import { CreateAttractionDto } from './dto/createAttraction.dto';
import { FilesService } from '../files/files.service';
import { MapsHelper } from '../utils/helpers/MapsHelper';
import { UpdateAttractionDto } from './dto/updateAttraction';
import { UpdateStatusDto } from './dto/updateStatusDto';

@Injectable()
export class AttractionService {
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

  async getAttractions(): Promise<GetAttractionDto[]> {
    return this.attractionRepository.getAttractions();
  }

  async getAttraction(id: string): Promise<GetAttractionDto | null> {
    return this.attractionRepository.getAttraction(id);
  }

  async updateAttraction(dto: UpdateAttractionDto, photo: any) {
    const fileName = await this.fileService.createFile(photo);
    const mapLink = MapsHelper.generateYandexMapsLink(dto.latitude, dto.longitude);

    return this.attractionRepository.updateAttraction({
      ...dto,
      photo: fileName,
      mapLink
    });
  }

  async deleteAttraction(id: string) {
    return this.attractionRepository.deleteAttraction(id);
  }

  async updateAttractionStatus(dto: UpdateStatusDto) {
    return this.attractionRepository.updateStatus(dto);
  }
}

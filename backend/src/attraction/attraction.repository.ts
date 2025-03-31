import { CreateAttractionDto } from './dto/createAttraction.dto';
import { DatabaseService } from '../database/postgres/database.service';
import { Injectable } from '@nestjs/common';

interface SaveAttractionData extends CreateAttractionDto {
  mapLink: string;
}

@Injectable()
export class AttractionRepository {
  constructor(private db: DatabaseService) {}

  async saveAttraction(dto: SaveAttractionData) {
    return this.db.attraction.create({
      data: {
        name: dto.name,
        description: dto.description,
        rating: Number(dto.rating),
        photo: dto.photo,
        location: dto.location,
        latitude: Number(dto.latitude),
        longitude: Number(dto.longitude),
        mapLink: dto.mapLink
      },
      select: {
        id: true,
        createAt: true,
        name: true,
        description: true,
        rating: true,
        photo: true,
        location: true,
        latitude: true,
        longitude: true,
        mapLink: true,
        status: true
      }
    });
  }
}

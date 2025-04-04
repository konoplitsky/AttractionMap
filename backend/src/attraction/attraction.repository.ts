import { CreateAttractionDto } from './dto/createAttraction.dto';
import { DatabaseService } from '../database/postgres/database.service';
import { Injectable } from '@nestjs/common';
import { UpdateAttractionDto } from './dto/updateAttraction';

interface SaveAttractionData extends CreateAttractionDto {
  mapLink: string;
}

interface UpdateAttractionData extends UpdateAttractionDto {
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

  async getAttractions() {
    return this.db.attraction.findMany({
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

  async getAttraction(AttractionId: string) {
    return this.db.attraction.findUnique({
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
      },
      where: {
        id: AttractionId
      }
    });
  }

  async updateAttraction(dto: UpdateAttractionData) {
    return this.db.attraction.update({
      where: {
        id: dto.id
      },
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

  async deleteAttraction(id: string) {
    await this.db.attraction.delete({
      where: {
        id: id
      }
    });
  }
}

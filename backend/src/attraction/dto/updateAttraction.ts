import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateAttractionDto {
  @ApiProperty({ description: 'Id достопримечательности' })
  id: string;

  @ApiPropertyOptional({ description: 'Название' })
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ description: 'Описание' })
  description: string;

  @ApiPropertyOptional({ description: 'Рейтинг' })
  rating: number;

  @ApiPropertyOptional({ description: 'Фото', format: 'binary' })
  photo: string;

  @ApiPropertyOptional({ description: 'Локация' })
  location: string;

  @ApiPropertyOptional({ description: 'Широта' })
  latitude: number;

  @ApiPropertyOptional({ description: 'Долгота' })
  longitude: number;
}

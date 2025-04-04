import { ApiProperty } from '@nestjs/swagger';

export class GetAttractionDto {
  @ApiProperty({ description: 'Id' })
  id: string;

  @ApiProperty({ description: 'Время создания' })
  createAt: Date;

  @ApiProperty({ description: 'Название' })
  name: string;

  @ApiProperty({ description: 'Описание' })
  description: string;

  @ApiProperty({ description: 'Рейтинг' })
  rating: number;

  @ApiProperty({ description: 'Фото' })
  photo: string;

  @ApiProperty({ description: 'Локация' })
  readonly location: string;

  @ApiProperty({ description: 'Широта', type: Number })
  readonly latitude: number;

  @ApiProperty({ description: 'Долгота', type: Number })
  readonly longitude: number;

  @ApiProperty({ description: 'Ссылка на карту' })
  mapLink: string;

  @ApiProperty({ description: 'Статус' })
  status: string;
}

import { ApiProperty } from "@nestjs/swagger";

export class CreateAttractionDto {
  @ApiProperty({ description: "Название" })
  readonly name: string;

  @ApiProperty({ description: "Описание" })
  readonly description: string;

  @ApiProperty({ description: "Рейтинг", type: Number })
  readonly rating: number;

  @ApiProperty({ description: "Фото", format: "binary" })
  readonly photo: string;

  @ApiProperty({ description: "Локация" })
  readonly location: string;

  @ApiProperty({ description: "Широта", type: Number })
  readonly latitude: number;

  @ApiProperty({ description: "Долгота", type: Number })
  readonly longitude: number;
}

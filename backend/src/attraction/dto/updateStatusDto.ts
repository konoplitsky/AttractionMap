import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@prisma/client';

export class UpdateStatusDto {
  @ApiProperty({ description: 'Id' })
  id: string;

  @ApiProperty({ description: 'Статус' })
  status: Status;
}

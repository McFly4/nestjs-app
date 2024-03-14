import { IsString, IsBoolean, IsDate } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  readonly description: string;

  @IsBoolean()
  readonly state?: boolean;

  @IsDate()
  readonly createdAt?: Date;
}

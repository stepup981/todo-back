import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString({ message: 'Название задачи должно являтся строкой' })
  @IsNotEmpty({ message: 'Название задачи не должно быть пустым' })
  name: string;
  @IsOptional()
  @IsString({ message: 'Описание задачи должно являтся строкой' })
  description?: string;
}

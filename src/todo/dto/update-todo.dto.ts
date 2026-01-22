import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTodoDto {
  @IsString({ message: 'Название задачи должно являтся строкой' })
  @IsNotEmpty({ message: 'Название задачи не должно быть пустым' })
  name: string;

  @IsString({ message: 'Описание задачи должно являтся строкой' })
  description: string;
}

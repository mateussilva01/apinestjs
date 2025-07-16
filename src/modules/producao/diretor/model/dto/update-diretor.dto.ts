import { PartialType } from '@nestjs/mapped-types';
import { CreateDiretorDto } from './create-diretor.dto';

export class UpdateDiretorDto extends PartialType(CreateDiretorDto) {}

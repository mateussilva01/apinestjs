import { PartialType } from '@nestjs/mapped-types';
import { CreateAtorDto } from './create-ator.dto';

export class UpdateAtorDto extends PartialType(CreateAtorDto) {}

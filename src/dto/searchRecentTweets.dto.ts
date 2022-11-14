import {
  IsOptional,
  IsDateString,
  IsString,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { RecentTwitter } from '../../libs/shared/src/types';

export class SearchRecentTwitterDto {
  @IsOptional()
  @IsDateString()
  startTime?: String;

  @IsOptional()
  @IsDateString()
  endTime?: String;

  @IsNotEmpty()
  @IsString()
  @Type(() => String)
  query;
}

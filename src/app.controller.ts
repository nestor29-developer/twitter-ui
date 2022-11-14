import { Request } from 'express';

import { Controller, Get, Query, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { SearchRecentTwitterDto } from './dto/searchRecentTweets.dto';
import { RecentTwitter } from 'libs/shared/src/types';

@Controller('/search-twitter')
@ApiTags('search-twitter')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async SearchRecentTwitters(
    @Req() request: Request,
    @Query() params: SearchRecentTwitterDto,
  ): Promise<RecentTwitter> {
    return await this.appService.getTwitters(params, request);
  }
}

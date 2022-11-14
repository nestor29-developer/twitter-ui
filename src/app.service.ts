import { Request } from 'express';
import { Injectable } from '@nestjs/common';
import { getRequest } from '../libs/shared/src/modules/twitter/twitter.service';
import { SearchRecentTwitterDto } from './dto/searchRecentTweets.dto';
import { RecentTwitter } from 'libs/shared/src/types';

@Injectable()
export class AppService {
  async getTwitters(
    params: SearchRecentTwitterDto,
    request: Request,
  ): Promise<RecentTwitter> {
    return await getRequest(params, request);
  }
}

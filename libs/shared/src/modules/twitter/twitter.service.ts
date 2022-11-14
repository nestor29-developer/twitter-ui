import { Logger } from '@nestjs/common';

const needle = require('needle');
const endpointUrl = 'https://api.twitter.com/2/tweets/search/recent';

export async function getRequest(params, request) {
  const userAgentValue = 'v2RecentSearchJS';

  const paramsQuery: any = {
    query: params.query,
    'tweet.fields': 'created_at,entities',
    'user.fields': 'profile_image_url,url,verified',
    max_results: 100,
  };

  if (params.startTime) {
    paramsQuery.start_time = params.startTime;
  }

  if (params.endTime) {
    paramsQuery.end_time = params.endTime;
  }

  const res = await needle('get', endpointUrl, paramsQuery, {
    headers: {
      'User-Agent': userAgentValue,
      authorization: `Bearer ${request.headers.authorization}`,
    },
  });

  if (res.body) {
    return res.body;
  } else {
    Logger.error('Error: Failed to fetch data');
    throw new Error('Unsuccessful request');
  }
}

(async (params, request) => {
  try {
    await getRequest(params, request);
  } catch (e) {
    Logger.error('Error: Failed to fetch data', e);
  }
})();

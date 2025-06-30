import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Container!';
  }

  getContainer(): Object {
    return {
      country: process.env.CLOUDFLARE_COUNTRY_A2,
      deployment: process.env.CLOUDFLARE_DEPLOYMENT_ID,
      location: process.env.CLOUDFLARE_LOCATION,
      node: process.env.CLOUDFLARE_NODE_ID,
      placement: process.env.CLOUDFLARE_PLACEMENT_ID,
      region: process.env.CLOUDFLARE_REGION
    }
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  pingMe(): string {
    return 'working fine!';
  }
}

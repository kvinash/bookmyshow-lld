import { Injectable } from '@nestjs/common';
import { BaseService } from '../common/base.service';

@Injectable()
export class MovieService extends BaseService {

  getId(): void {
      
  }
  getHello(): string {
    return 'Hello World!';
  }
}

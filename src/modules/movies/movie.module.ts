import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { BaseService } from '../common/base.service';


@Module({
  imports: [
     
   ],
  controllers: [MovieController],
  providers: [MovieService, BaseService ],
})
export class MovieModule {}
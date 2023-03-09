import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: '/post' })
  ping(_: any) {
    return { msg: 'Getting All Posts' };
  }
}

import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: '/user' })
  user(data: any) {
    console.log(data, 'Data from apim Gateway');
    return { msg: 'Getting single user' };
  }
  @MessagePattern({ cmd: '/user/all' })
  user1(_: any) {
    return { msg: 'Getting All user' };
  }
}

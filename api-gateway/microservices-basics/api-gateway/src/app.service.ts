import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('SERVICE_A') private readonly userService: ClientProxy,
    @Inject('SERVICE_B') private readonly postService: ClientProxy,
  ) {}

  getService(service: ClientProxy, url: string, data: any) {
    return service.send(
      {
        cmd: `${url}`,
      },
      data,
    );
  }

  userRequests(url: string) {
    return this.getService(this.userService, url, { msg: 'rajesh' });
  }

  postRequests(url: string) {
    return this.getService(this.postService, url, {});
  }
}

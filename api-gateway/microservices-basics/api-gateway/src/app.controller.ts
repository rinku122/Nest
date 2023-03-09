import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user*')
  userRequests(@Req() req: Request) {
    return this.appService.userRequests(req.originalUrl);
  }

  @Get('post*')
  postRequests(@Req() req: Request) {
    return this.appService.postRequests(req.originalUrl);
  }
}

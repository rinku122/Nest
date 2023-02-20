import { Injectable } from '@nestjs/common';
import { GetUserDto } from 'dto/get-user.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '1',
      stripeUserId: '1111',
    },
    {
      userId: '2',
      stripeUserId: '2222',
    },
    {
      userId: '3',
      stripeUserId: '3333',
    },
    {
      userId: '4',
      stripeUserId: '4444',
    },
  ];
  getHello(): string {
    return 'Hello World!';
  }

  getUser(dto: GetUserDto) {
    return this.users.find((user) => user.userId === dto.userId);
  }
}

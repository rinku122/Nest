import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserDto } from './dto/get-User.dto';
import { OrderCreatedEvent } from './events';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  handleCreateEvent(orderCreatedEvent: OrderCreatedEvent) {
    this.authClient
      .send('get_user', new GetUserDto(orderCreatedEvent.userId))
      .subscribe((user) =>
        console.log(
          `Billing User with stripeId ${user.stripeUserId} a price of $${orderCreatedEvent.price}`,
        ),
      );
  }
}

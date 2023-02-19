import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { Getuser } from 'src/auth/decorators';
import { Jwtguard } from 'src/auth/guard';
import { EditUserDto } from 'src/user/dto';
import { UserService } from './user.service';

@UseGuards(Jwtguard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@Getuser('') user: User) {
    return user;
  }

  @Get('email')
  getEmail(@Getuser('email') email: string) {
    return { email };
  }

  @Patch('update')
  updateUser(@Getuser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.updateUser(userId, dto);
  }
}

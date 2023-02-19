import { Injectable, Patch } from '@nestjs/common';
import { EditUserDto } from 'src/user/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  @Patch()
  async updateUser(userId: number, dto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: { ...dto },
    });
    return user;
  }
}

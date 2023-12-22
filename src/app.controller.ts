import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateUserBody } from './dtos/create-user-body';

@Controller('users')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { name, role } = body;

    const newUser = await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        role,
      },
    });

    return {
      newUser,
    };
  }
}

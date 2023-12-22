/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateUserBody } from './dtos/create-user-body';
import { randomUUID } from 'node:crypto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserBody) {
    const { name, role } = createUserDto;

    const user = await this.prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        role,
      },
    });

    return {
      message: 'Usuário Criado com sucesso',
      data: user,
    };
  }

  async findAll() {
    const users = await this.prisma.user.findMany();

    return users;
  }
}

/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { UserDTO } from './dtos/user.dto';
import { randomUUID } from 'node:crypto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: UserDTO) {
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

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    return user;
  }

  async update(id: string, updateUserDTO: UserDTO) {
    const { name, role } = updateUserDTO;

    const user = await this.prisma.user.update({
      where: { id },
      data: {
        name,
        role,
      },
    });

    return user;
  }

  async remove(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    await this.prisma.user.delete({
      where: { id },
    });

    return {
      message: 'Usuário deletado com sucesso.',
      data: user,
    };
  }
}

import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { CreateUserBody } from './dtos/create-user-body';

@Controller('users')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserBody) {
    return this.appService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }
}

import { Body, Controller, Post, Get, Param, Patch } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { UserDTO } from './dtos/user.dto';

@Controller('users')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService,
  ) {}

  @Post()
  create(@Body() createUserDto: UserDTO) {
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UserDTO) {
    return this.appService.update(id, updateUserDto);
  }
}

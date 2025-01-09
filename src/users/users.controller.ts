import { Controller, Post, Body } from '@nestjs/common';
import { CreateUsersDto } from './dtos/create-users.dto';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: CreateUsersDto) {
    console.log(body);
  }
}

import { Controller, Post, Body } from '@nestjs/common';
import { CreateUsersDto } from './dtos/create-users.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('/signup')
  createUser(@Body() body: CreateUsersDto) {
    this.usersService.create(body.email, body.password);
    console.log(body);
  }
}

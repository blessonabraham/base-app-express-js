import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import { Service } from 'typedi';
import { IUserService, UserType } from '../Types/UserTypes';

@Controller('/users')
@Service()
export class UserController {

  constructor(private userService: IUserService) { }

  @Get('/')
  getAllUsers() {
    return this.userService.getAllUsers()
  }

  @Get('/:id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id)
  }

  @Post('/')
  addUser(@Body() user: UserType) {
    return this.userService.addUser(user)
  }

  @Put('/:id')
  updateUser(@Param('id') id: number, @Body() user: UserType) {
    return this.userService.updateUser(id, user)
  }

  @Delete('/:id')
  removeUser(@Param('id') id: number) {
    return this.userService.removeUser(id)
  }
}
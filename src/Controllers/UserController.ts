import { Param, Body, Get, Post, Put, Delete, Authorized, JsonController } from 'routing-controllers';
import { Service } from 'typedi';
import { IUserService, UserReqDTO, UserType } from '../Types/UserTypes';

@JsonController('/users')
@Service()
export class UserController {

  constructor(private userService: IUserService) { }

  @Get('/')
  getAllUsers() {
    return this.userService.getAllUsers()
  }

  @Authorized()
  @Get('/:id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id)
  }

  @Post('/')
  addUser(@Body() user: UserReqDTO) {
    return this.userService.addUser(user)
  }

  @Authorized()
  @Put('/:id')
  updateUser(@Param('id') id: number, @Body() user: UserReqDTO) {
    return this.userService.updateUser(id, user)
  }

  @Delete('/:id')
  removeUser(@Param('id') id: number) {
    return this.userService.removeUser(id)
  }
}
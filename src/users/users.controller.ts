import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { handleResponse } from 'src/utils/responsehandle';
import { EC200, EM100, EM104 } from 'src/constant';

@ApiTags('contact-us')
@Controller('contact-us')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async contactUs(@Body() createUserDto: CreateUserDto) {

    try {
      await this.usersService.contactUs(createUserDto);
      return handleResponse.buildSuccessObj(EC200, EM104, null);
    } catch (error) {
      return handleResponse.buildErrObj(null, EM100, error);
    }
  }
}

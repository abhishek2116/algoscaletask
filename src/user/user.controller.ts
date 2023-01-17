import {
  Controller,
  UseGuards,
  Get,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ProfileDto } from './dto/profile.dto';

@Controller('')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('info')
  urinfo() {
    return {
      success: true,
      data: {
        info: 'Some information about the <b>company</b>.',
      },
    };
  }

  @Get('profile')
  myprofile(@Query() dto: ProfileDto) {
    return this.userService.helloProfile(dto);
  }
}

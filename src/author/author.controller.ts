import {
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller('')
export class AuthorController {
  constructor(
    private authorService: AuthorService,
  ) {}

  @Get('author')
  getAuthorcontrol(@Query() dto: any) {
    return this.authorService.getAuthorservice(dto);
  }
}

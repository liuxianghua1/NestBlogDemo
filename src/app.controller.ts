import { Controller, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

@Controller()
@ApiUseTags('首页')
export class AppController {

  @Get()
  index() {
    return 'index'
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/bienvenu/:param')
  getMsg(@Param('param') param: string): string {
    return this.appService.getMsg(param);
  }

}

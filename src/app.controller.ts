import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('config')
  config() {
    return {
      nodeEnv: process.env.NODE_ENV,
      port: process.env.PORT,
      dbHostShown: process.env.NODE_ENV === 'development',
    };
  }
}

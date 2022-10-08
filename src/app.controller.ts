import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(`categories`)
  getCategories(){
    return this.appService.getCategories();
  }

  @Get(`words/:id`)
  getWords(@Param('id') id: string) {
    return this.appService.getWords(id);
  }

  @Get(`tests/:id`)
  getTests(@Param(`id`) id: string){
    return this.appService.getTest(id);
  }

  @Get('check-word')
  checkWord(@Query() query) {
    return this.appService.getCurrentTranslation(+query.id);
  }
}

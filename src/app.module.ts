import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './providers/db/db.module';
@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ".env"
  }), DbModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

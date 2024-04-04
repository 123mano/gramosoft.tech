import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MailUtils } from 'src/utils/mailUtils';

@Module({
  controllers: [UsersController],
  providers: [UsersService,MailUtils],
})
export class UsersModule {}

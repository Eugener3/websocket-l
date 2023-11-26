import { Module } from '@nestjs/common';
import { SocketService } from './socket/socket.service';

@Module({
  controllers: [],
  providers: [SocketService],
  imports: [],
})
export class AppModule {}

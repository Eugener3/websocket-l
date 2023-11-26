import { Module } from '@nestjs/common';
import { SocketService } from './socket/socket.service';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  controllers: [],
  providers: [],
  imports: [GatewayModule],
})
export class AppModule {}

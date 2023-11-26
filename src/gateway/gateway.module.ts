import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';

@Module({
  providers: [GatewayService],
  imports: [],
})
export class GatewayModule {}

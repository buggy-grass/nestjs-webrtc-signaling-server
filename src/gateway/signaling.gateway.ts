import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { PrismaService } from '../orm/prisma.service';
import { RedisService } from '../services/redis/redis.service';

interface SignalPayload {
  roomId: string;
  type: 'OFFER' | 'ANSWER' | 'ICE_CANDIDATE';
  data: any;
}

@WebSocketGateway({ cors: true })
export class SignalingGateway {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redisService: RedisService,
  ) {}

  @SubscribeMessage('signal')
  async handleSignal(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: SignalPayload,
  ) {
    await this.redisService.publish(`room:${payload.roomId}`, payload);
  }
}

import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { PrismaService } from '../orm/prisma.service';
import { RedisService } from '../services/redis/redis.service';
import { logger } from 'src/common/logger';

interface SignalPayload {
  roomId: string;
  type: 'OFFER' | 'ANSWER' | 'ICE_CANDIDATE';
  data: any;
}

interface Connected {
  username: '';
  password: '';
}

@WebSocketGateway({ cors: true })
export class SignalingGateway {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redisService: RedisService,
  ) {}

  @SubscribeMessage('connected')
  handleConnection(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: Connected,
  ) {
    logger(payload);
    // await this.redisService.publish(`user connected:${payload.username}`, payload);
  }

  @SubscribeMessage('signal')
  async handleSignal(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: SignalPayload,
  ) {
    logger(payload);
    await this.redisService.publish(`room:${payload.roomId}`, payload);
  }
}

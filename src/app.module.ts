import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './config/env.schema';
import { SignalingGateway } from './gateway/signaling.gateway';
import { RedisModule } from './services/redis/redis.module';
import { PrismaModule } from './orm/prisma.module';
import {
  UserModule,
  SessionModule,
  DeviceModule,
  RoomModule,
  RoomMemberModule,
  RoomInviteModule,
  CallLogModule,
  PeerModule,
  SignalMessageModule,
  ICECandidateCacheModule,
  MediaSessionModule,
} from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (env) => envSchema.parse(env),
    }),
    PrismaModule,
    RedisModule,
    UserModule,
    SessionModule,
    DeviceModule,
    RoomModule,
    RoomMemberModule,
    RoomInviteModule,
    CallLogModule,
    PeerModule,
    SignalMessageModule,
    ICECandidateCacheModule,
    MediaSessionModule,
  ],
  controllers: [AppController],
  providers: [AppService, SignalingGateway],
})
export class AppModule {}

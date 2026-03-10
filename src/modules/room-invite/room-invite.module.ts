import { Module } from '@nestjs/common';
import { RoomInviteService } from './room-invite.service';

@Module({
  providers: [RoomInviteService],
  exports: [RoomInviteService],
})
export class RoomInviteModule {}

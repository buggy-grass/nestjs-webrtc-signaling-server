import { Module } from '@nestjs/common';
import { MediaSessionService } from './media-session.service';

@Module({
  providers: [MediaSessionService],
  exports: [MediaSessionService],
})
export class MediaSessionModule {}

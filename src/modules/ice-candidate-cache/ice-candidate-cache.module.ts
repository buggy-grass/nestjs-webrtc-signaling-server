import { Module } from '@nestjs/common';
import { ICECandidateCacheService } from './ice-candidate-cache.service';

@Module({
  providers: [ICECandidateCacheService],
  exports: [ICECandidateCacheService],
})
export class ICECandidateCacheModule {}

import { Module } from '@nestjs/common';
import { SignalMessageService } from './signal-message.service';

@Module({
  providers: [SignalMessageService],
  exports: [SignalMessageService],
})
export class SignalMessageModule {}

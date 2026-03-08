import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async publish(channel: string, message: any) {
    await this.redis.publish(channel, JSON.stringify(message));
  }

  async subscribe(channel: string, handler: (msg: any) => void) {
    // ⚡ ESLint safe satır
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const subscriber = this.redis.duplicate();

    await subscriber.subscribe(channel);
    subscriber.on('message', (ch, msg) => {
      if (ch === channel) handler(JSON.parse(msg));
    });
  }
}

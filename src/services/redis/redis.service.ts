import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@nestjs-modules/ioredis';

/** Kullanılan Redis API'si – tip ESLint tarafından güvenli çözümlenir */
interface RedisClientLike {
  publish(channel: string, message: string): Promise<number>;
  duplicate(): RedisSubscriberLike;
}

interface RedisSubscriberLike {
  subscribe(channel: string): Promise<void>;
  on(
    event: 'message',
    listener: (channel: string, message: string) => void,
  ): unknown;
}

@Injectable()
export class RedisService {
  constructor(@InjectRedis() private readonly redis: RedisClientLike) {}

  async publish(channel: string, message: unknown): Promise<void> {
    await this.redis.publish(channel, JSON.stringify(message));
  }

  async subscribe(
    channel: string,
    handler: (msg: unknown) => void,
  ): Promise<void> {
    const subscriber = this.redis.duplicate();
    await subscriber.subscribe(channel);
    subscriber.on('message', (ch, msg) => {
      if (ch === channel) handler(JSON.parse(msg) as unknown);
    });
  }
}

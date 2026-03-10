import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../orm/prisma.service';
import type { MediaSession, Prisma } from '../../../generated/prisma/client.js';

@Injectable()
export class MediaSessionService {
  constructor(private readonly prisma: PrismaService) {}

  get delegate(): Prisma.MediaSessionDelegate {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.prisma.db.mediaSession;
  }

  async create(data: Prisma.MediaSessionCreateInput): Promise<MediaSession> {
    return this.delegate.create({ data });
  }

  async createMany(
    data: Prisma.MediaSessionCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.createMany({ data });
  }

  async findMany(
    args?: Prisma.MediaSessionFindManyArgs,
  ): Promise<MediaSession[]> {
    return this.delegate.findMany(args);
  }

  async findUnique(
    args: Prisma.MediaSessionFindUniqueArgs,
  ): Promise<MediaSession | null> {
    return this.delegate.findUnique(args);
  }

  async findUniqueOrThrow(
    args: Prisma.MediaSessionFindUniqueOrThrowArgs,
  ): Promise<MediaSession> {
    return this.delegate.findUniqueOrThrow(args);
  }

  async findFirst(
    args?: Prisma.MediaSessionFindFirstArgs,
  ): Promise<MediaSession | null> {
    return this.delegate.findFirst(args);
  }

  async update(args: Prisma.MediaSessionUpdateArgs): Promise<MediaSession> {
    return this.delegate.update(args);
  }

  async updateMany(
    args: Prisma.MediaSessionUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.updateMany(args);
  }

  async delete(args: Prisma.MediaSessionDeleteArgs): Promise<MediaSession> {
    return this.delegate.delete(args);
  }

  async deleteMany(
    args?: Prisma.MediaSessionDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.deleteMany(args);
  }

  async count(args?: Prisma.MediaSessionCountArgs): Promise<number> {
    return this.delegate.count(args);
  }

  async upsert(args: Prisma.MediaSessionUpsertArgs): Promise<MediaSession> {
    return this.delegate.upsert(args);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../orm/prisma.service';
import type { Prisma, Room } from '../../../generated/prisma/client.js';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  get delegate(): Prisma.RoomDelegate {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.prisma.db.room;
  }

  async create(data: Prisma.RoomCreateInput): Promise<Room> {
    return this.delegate.create({ data });
  }

  async createMany(
    data: Prisma.RoomCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.createMany({ data });
  }

  async findMany(args?: Prisma.RoomFindManyArgs): Promise<Room[]> {
    return this.delegate.findMany(args);
  }

  async findUnique(args: Prisma.RoomFindUniqueArgs): Promise<Room | null> {
    return this.delegate.findUnique(args);
  }

  async findUniqueOrThrow(
    args: Prisma.RoomFindUniqueOrThrowArgs,
  ): Promise<Room> {
    return this.delegate.findUniqueOrThrow(args);
  }

  async findFirst(args?: Prisma.RoomFindFirstArgs): Promise<Room | null> {
    return this.delegate.findFirst(args);
  }

  async update(args: Prisma.RoomUpdateArgs): Promise<Room> {
    return this.delegate.update(args);
  }

  async updateMany(
    args: Prisma.RoomUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.updateMany(args);
  }

  async delete(args: Prisma.RoomDeleteArgs): Promise<Room> {
    return this.delegate.delete(args);
  }

  async deleteMany(
    args?: Prisma.RoomDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.deleteMany(args);
  }

  async count(args?: Prisma.RoomCountArgs): Promise<number> {
    return this.delegate.count(args);
  }

  async upsert(args: Prisma.RoomUpsertArgs): Promise<Room> {
    return this.delegate.upsert(args);
  }
}

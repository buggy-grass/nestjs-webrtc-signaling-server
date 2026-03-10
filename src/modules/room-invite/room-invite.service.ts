import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../orm/prisma.service';
import type { Prisma, RoomInvite } from '../../../generated/prisma/client.js';

@Injectable()
export class RoomInviteService {
  constructor(private readonly prisma: PrismaService) {}

  get delegate(): Prisma.RoomInviteDelegate {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.prisma.db.roomInvite;
  }

  async create(data: Prisma.RoomInviteCreateInput): Promise<RoomInvite> {
    return this.delegate.create({ data });
  }

  async createMany(
    data: Prisma.RoomInviteCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.createMany({ data });
  }

  async findMany(args?: Prisma.RoomInviteFindManyArgs): Promise<RoomInvite[]> {
    return this.delegate.findMany(args);
  }

  async findUnique(
    args: Prisma.RoomInviteFindUniqueArgs,
  ): Promise<RoomInvite | null> {
    return this.delegate.findUnique(args);
  }

  async findUniqueOrThrow(
    args: Prisma.RoomInviteFindUniqueOrThrowArgs,
  ): Promise<RoomInvite> {
    return this.delegate.findUniqueOrThrow(args);
  }

  async findFirst(
    args?: Prisma.RoomInviteFindFirstArgs,
  ): Promise<RoomInvite | null> {
    return this.delegate.findFirst(args);
  }

  async update(args: Prisma.RoomInviteUpdateArgs): Promise<RoomInvite> {
    return this.delegate.update(args);
  }

  async updateMany(
    args: Prisma.RoomInviteUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.updateMany(args);
  }

  async delete(args: Prisma.RoomInviteDeleteArgs): Promise<RoomInvite> {
    return this.delegate.delete(args);
  }

  async deleteMany(
    args?: Prisma.RoomInviteDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.deleteMany(args);
  }

  async count(args?: Prisma.RoomInviteCountArgs): Promise<number> {
    return this.delegate.count(args);
  }

  async upsert(args: Prisma.RoomInviteUpsertArgs): Promise<RoomInvite> {
    return this.delegate.upsert(args);
  }
}

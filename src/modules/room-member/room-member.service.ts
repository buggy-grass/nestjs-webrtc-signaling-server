import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../orm/prisma.service';
import type { Prisma, RoomMember } from '../../../generated/prisma/client.js';

@Injectable()
export class RoomMemberService {
  constructor(private readonly prisma: PrismaService) {}

  get delegate(): Prisma.RoomMemberDelegate {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.prisma.db.roomMember;
  }

  async create(data: Prisma.RoomMemberCreateInput): Promise<RoomMember> {
    return this.delegate.create({ data });
  }

  async createMany(
    data: Prisma.RoomMemberCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.createMany({ data });
  }

  async findMany(args?: Prisma.RoomMemberFindManyArgs): Promise<RoomMember[]> {
    return this.delegate.findMany(args);
  }

  async findUnique(
    args: Prisma.RoomMemberFindUniqueArgs,
  ): Promise<RoomMember | null> {
    return this.delegate.findUnique(args);
  }

  async findUniqueOrThrow(
    args: Prisma.RoomMemberFindUniqueOrThrowArgs,
  ): Promise<RoomMember> {
    return this.delegate.findUniqueOrThrow(args);
  }

  async findFirst(
    args?: Prisma.RoomMemberFindFirstArgs,
  ): Promise<RoomMember | null> {
    return this.delegate.findFirst(args);
  }

  async update(args: Prisma.RoomMemberUpdateArgs): Promise<RoomMember> {
    return this.delegate.update(args);
  }

  async updateMany(
    args: Prisma.RoomMemberUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.updateMany(args);
  }

  async delete(args: Prisma.RoomMemberDeleteArgs): Promise<RoomMember> {
    return this.delegate.delete(args);
  }

  async deleteMany(
    args?: Prisma.RoomMemberDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.deleteMany(args);
  }

  async count(args?: Prisma.RoomMemberCountArgs): Promise<number> {
    return this.delegate.count(args);
  }

  async upsert(args: Prisma.RoomMemberUpsertArgs): Promise<RoomMember> {
    return this.delegate.upsert(args);
  }
}

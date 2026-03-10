import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../orm/prisma.service';
import type { CallLog, Prisma } from '../../../generated/prisma/client.js';

@Injectable()
export class CallLogService {
  constructor(private readonly prisma: PrismaService) {}

  get delegate(): Prisma.CallLogDelegate {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.prisma.db.callLog;
  }

  async create(data: Prisma.CallLogCreateInput): Promise<CallLog> {
    return this.delegate.create({ data });
  }

  async createMany(
    data: Prisma.CallLogCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.createMany({ data });
  }

  async findMany(args?: Prisma.CallLogFindManyArgs): Promise<CallLog[]> {
    return this.delegate.findMany(args);
  }

  async findUnique(
    args: Prisma.CallLogFindUniqueArgs,
  ): Promise<CallLog | null> {
    return this.delegate.findUnique(args);
  }

  async findUniqueOrThrow(
    args: Prisma.CallLogFindUniqueOrThrowArgs,
  ): Promise<CallLog> {
    return this.delegate.findUniqueOrThrow(args);
  }

  async findFirst(args?: Prisma.CallLogFindFirstArgs): Promise<CallLog | null> {
    return this.delegate.findFirst(args);
  }

  async update(args: Prisma.CallLogUpdateArgs): Promise<CallLog> {
    return this.delegate.update(args);
  }

  async updateMany(
    args: Prisma.CallLogUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.updateMany(args);
  }

  async delete(args: Prisma.CallLogDeleteArgs): Promise<CallLog> {
    return this.delegate.delete(args);
  }

  async deleteMany(
    args?: Prisma.CallLogDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.deleteMany(args);
  }

  async count(args?: Prisma.CallLogCountArgs): Promise<number> {
    return this.delegate.count(args);
  }

  async upsert(args: Prisma.CallLogUpsertArgs): Promise<CallLog> {
    return this.delegate.upsert(args);
  }
}

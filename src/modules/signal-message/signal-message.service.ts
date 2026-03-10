import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../orm/prisma.service';
import type { Prisma, SignalMessage } from '../../../generated/prisma/client.js';

@Injectable()
export class SignalMessageService {
  constructor(private readonly prisma: PrismaService) {}

  get delegate(): Prisma.SignalMessageDelegate {
    return this.prisma.db.signalMessage;
  }

  async create(data: Prisma.SignalMessageCreateInput): Promise<SignalMessage> {
    return this.delegate.create({ data });
  }

  async createMany(data: Prisma.SignalMessageCreateManyInput[]): Promise<Prisma.BatchPayload> {
    return this.delegate.createMany({ data });
  }

  async findMany(args?: Prisma.SignalMessageFindManyArgs): Promise<SignalMessage[]> {
    return this.delegate.findMany(args);
  }

  async findUnique(args: Prisma.SignalMessageFindUniqueArgs): Promise<SignalMessage | null> {
    return this.delegate.findUnique(args);
  }

  async findUniqueOrThrow(args: Prisma.SignalMessageFindUniqueOrThrowArgs): Promise<SignalMessage> {
    return this.delegate.findUniqueOrThrow(args);
  }

  async findFirst(args?: Prisma.SignalMessageFindFirstArgs): Promise<SignalMessage | null> {
    return this.delegate.findFirst(args);
  }

  async update(args: Prisma.SignalMessageUpdateArgs): Promise<SignalMessage> {
    return this.delegate.update(args);
  }

  async updateMany(args: Prisma.SignalMessageUpdateManyArgs): Promise<Prisma.BatchPayload> {
    return this.delegate.updateMany(args);
  }

  async delete(args: Prisma.SignalMessageDeleteArgs): Promise<SignalMessage> {
    return this.delegate.delete(args);
  }

  async deleteMany(args?: Prisma.SignalMessageDeleteManyArgs): Promise<Prisma.BatchPayload> {
    return this.delegate.deleteMany(args);
  }

  async count(args?: Prisma.SignalMessageCountArgs): Promise<number> {
    return this.delegate.count(args);
  }

  async upsert(args: Prisma.SignalMessageUpsertArgs): Promise<SignalMessage> {
    return this.delegate.upsert(args);
  }
}

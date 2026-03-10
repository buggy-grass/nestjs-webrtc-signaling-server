import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../orm/prisma.service';
import type { Prisma, Session } from '../../../generated/prisma/client.js';

@Injectable()
export class SessionService {
  constructor(private readonly prisma: PrismaService) {}

  get delegate(): Prisma.SessionDelegate {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.prisma.db.session;
  }

  async create(data: Prisma.SessionCreateInput): Promise<Session> {
    return this.delegate.create({ data });
  }

  async createMany(
    data: Prisma.SessionCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.createMany({ data });
  }

  async findMany(args?: Prisma.SessionFindManyArgs): Promise<Session[]> {
    return this.delegate.findMany(args);
  }

  async findUnique(
    args: Prisma.SessionFindUniqueArgs,
  ): Promise<Session | null> {
    return this.delegate.findUnique(args);
  }

  async findUniqueOrThrow(
    args: Prisma.SessionFindUniqueOrThrowArgs,
  ): Promise<Session> {
    return this.delegate.findUniqueOrThrow(args);
  }

  async findFirst(args?: Prisma.SessionFindFirstArgs): Promise<Session | null> {
    return this.delegate.findFirst(args);
  }

  async update(args: Prisma.SessionUpdateArgs): Promise<Session> {
    return this.delegate.update(args);
  }

  async updateMany(
    args: Prisma.SessionUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.updateMany(args);
  }

  async delete(args: Prisma.SessionDeleteArgs): Promise<Session> {
    return this.delegate.delete(args);
  }

  async deleteMany(
    args?: Prisma.SessionDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.deleteMany(args);
  }

  async count(args?: Prisma.SessionCountArgs): Promise<number> {
    return this.delegate.count(args);
  }

  async upsert(args: Prisma.SessionUpsertArgs): Promise<Session> {
    return this.delegate.upsert(args);
  }
}

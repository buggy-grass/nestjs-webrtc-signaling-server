import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../orm/prisma.service';
import type { Peer, Prisma } from '../../../generated/prisma/client.js';

@Injectable()
export class PeerService {
  constructor(private readonly prisma: PrismaService) {}

  get delegate(): Prisma.PeerDelegate {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.prisma.db.peer;
  }

  async create(data: Prisma.PeerCreateInput): Promise<Peer> {
    return this.delegate.create({ data });
  }

  async createMany(
    data: Prisma.PeerCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.createMany({ data });
  }

  async findMany(args?: Prisma.PeerFindManyArgs): Promise<Peer[]> {
    return this.delegate.findMany(args);
  }

  async findUnique(args: Prisma.PeerFindUniqueArgs): Promise<Peer | null> {
    return this.delegate.findUnique(args);
  }

  async findUniqueOrThrow(
    args: Prisma.PeerFindUniqueOrThrowArgs,
  ): Promise<Peer> {
    return this.delegate.findUniqueOrThrow(args);
  }

  async findFirst(args?: Prisma.PeerFindFirstArgs): Promise<Peer | null> {
    return this.delegate.findFirst(args);
  }

  async update(args: Prisma.PeerUpdateArgs): Promise<Peer> {
    return this.delegate.update(args);
  }

  async updateMany(
    args: Prisma.PeerUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.updateMany(args);
  }

  async delete(args: Prisma.PeerDeleteArgs): Promise<Peer> {
    return this.delegate.delete(args);
  }

  async deleteMany(
    args?: Prisma.PeerDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.deleteMany(args);
  }

  async count(args?: Prisma.PeerCountArgs): Promise<number> {
    return this.delegate.count(args);
  }

  async upsert(args: Prisma.PeerUpsertArgs): Promise<Peer> {
    return this.delegate.upsert(args);
  }
}

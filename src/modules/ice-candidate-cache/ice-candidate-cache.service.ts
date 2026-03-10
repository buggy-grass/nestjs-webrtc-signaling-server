import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../orm/prisma.service';
import type {
  ICECandidateCache,
  Prisma,
} from '../../../generated/prisma/client.js';

@Injectable()
export class ICECandidateCacheService {
  constructor(private readonly prisma: PrismaService) {}

  get delegate(): Prisma.ICECandidateCacheDelegate {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.prisma.db.iCECandidateCache;
  }

  async create(
    data: Prisma.ICECandidateCacheCreateInput,
  ): Promise<ICECandidateCache> {
    return this.delegate.create({ data });
  }

  async createMany(
    data: Prisma.ICECandidateCacheCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.createMany({ data });
  }

  async findMany(
    args?: Prisma.ICECandidateCacheFindManyArgs,
  ): Promise<ICECandidateCache[]> {
    return this.delegate.findMany(args);
  }

  async findUnique(
    args: Prisma.ICECandidateCacheFindUniqueArgs,
  ): Promise<ICECandidateCache | null> {
    return this.delegate.findUnique(args);
  }

  async findUniqueOrThrow(
    args: Prisma.ICECandidateCacheFindUniqueOrThrowArgs,
  ): Promise<ICECandidateCache> {
    return this.delegate.findUniqueOrThrow(args);
  }

  async findFirst(
    args?: Prisma.ICECandidateCacheFindFirstArgs,
  ): Promise<ICECandidateCache | null> {
    return this.delegate.findFirst(args);
  }

  async update(
    args: Prisma.ICECandidateCacheUpdateArgs,
  ): Promise<ICECandidateCache> {
    return this.delegate.update(args);
  }

  async updateMany(
    args: Prisma.ICECandidateCacheUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.updateMany(args);
  }

  async delete(
    args: Prisma.ICECandidateCacheDeleteArgs,
  ): Promise<ICECandidateCache> {
    return this.delegate.delete(args);
  }

  async deleteMany(
    args?: Prisma.ICECandidateCacheDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.deleteMany(args);
  }

  async count(args?: Prisma.ICECandidateCacheCountArgs): Promise<number> {
    return this.delegate.count(args);
  }

  async upsert(
    args: Prisma.ICECandidateCacheUpsertArgs,
  ): Promise<ICECandidateCache> {
    return this.delegate.upsert(args);
  }
}

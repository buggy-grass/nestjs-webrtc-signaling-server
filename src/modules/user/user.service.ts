import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../orm/prisma.service';
import type { Prisma, User } from '../../../generated/prisma/client.js';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  get delegate(): Prisma.UserDelegate {
    return this.prisma.db.user;
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.delegate.create({ data });
  }

  async createMany(
    data: Prisma.UserCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.createMany({ data });
  }

  async findMany(args?: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.delegate.findMany(args);
  }

  async findUnique(args: Prisma.UserFindUniqueArgs): Promise<User | null> {
    return this.delegate.findUnique(args);
  }

  async findUniqueOrThrow(
    args: Prisma.UserFindUniqueOrThrowArgs,
  ): Promise<User> {
    return this.delegate.findUniqueOrThrow(args);
  }

  async findFirst(args?: Prisma.UserFindFirstArgs): Promise<User | null> {
    return this.delegate.findFirst(args);
  }

  async update(args: Prisma.UserUpdateArgs): Promise<User> {
    return this.delegate.update(args);
  }

  async updateMany(
    args: Prisma.UserUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.updateMany(args);
  }

  async delete(args: Prisma.UserDeleteArgs): Promise<User> {
    return this.delegate.delete(args);
  }

  async deleteMany(
    args?: Prisma.UserDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.deleteMany(args);
  }

  async count(args?: Prisma.UserCountArgs): Promise<number> {
    return this.delegate.count(args);
  }

  async upsert(args: Prisma.UserUpsertArgs): Promise<User> {
    return this.delegate.upsert(args);
  }
}

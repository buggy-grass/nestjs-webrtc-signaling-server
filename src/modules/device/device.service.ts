import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../orm/prisma.service';
import type { Device, Prisma } from '../../../generated/prisma/client.js';

@Injectable()
export class DeviceService {
  constructor(private readonly prisma: PrismaService) {}

  get delegate(): Prisma.DeviceDelegate {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.prisma.db.device;
  }

  async create(data: Prisma.DeviceCreateInput): Promise<Device> {
    return this.delegate.create({ data });
  }

  async createMany(
    data: Prisma.DeviceCreateManyInput[],
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.createMany({ data });
  }

  async findMany(args?: Prisma.DeviceFindManyArgs): Promise<Device[]> {
    return this.delegate.findMany(args);
  }

  async findUnique(args: Prisma.DeviceFindUniqueArgs): Promise<Device | null> {
    return this.delegate.findUnique(args);
  }

  async findUniqueOrThrow(
    args: Prisma.DeviceFindUniqueOrThrowArgs,
  ): Promise<Device> {
    return this.delegate.findUniqueOrThrow(args);
  }

  async findFirst(args?: Prisma.DeviceFindFirstArgs): Promise<Device | null> {
    return this.delegate.findFirst(args);
  }

  async update(args: Prisma.DeviceUpdateArgs): Promise<Device> {
    return this.delegate.update(args);
  }

  async updateMany(
    args: Prisma.DeviceUpdateManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.updateMany(args);
  }

  async delete(args: Prisma.DeviceDeleteArgs): Promise<Device> {
    return this.delegate.delete(args);
  }

  async deleteMany(
    args?: Prisma.DeviceDeleteManyArgs,
  ): Promise<Prisma.BatchPayload> {
    return this.delegate.deleteMany(args);
  }

  async count(args?: Prisma.DeviceCountArgs): Promise<number> {
    return this.delegate.count(args);
  }

  async upsert(args: Prisma.DeviceUpsertArgs): Promise<Device> {
    return this.delegate.upsert(args);
  }
}

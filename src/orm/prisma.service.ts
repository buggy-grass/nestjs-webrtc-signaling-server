import { Injectable, OnModuleInit } from '@nestjs/common';
import type { PrismaClient } from '../../generated/prisma/client';
import { prisma } from './prisma';

@Injectable()
export class PrismaService implements OnModuleInit {
  private readonly client: PrismaClient = prisma;

  async onModuleInit() {
    await this.client.$connect();
  }

  get db(): PrismaClient {
    return this.client;
  }
}

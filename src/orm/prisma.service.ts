import { Injectable, OnModuleInit } from '@nestjs/common';
import { prisma } from './prisma'; // senin prisma instance export ettiğin dosya

@Injectable()
export class PrismaService implements OnModuleInit {
  private client = prisma;

  async onModuleInit() {
    await this.client.$connect();
  }

  get db() {
    return this.client;
  }
}

import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(5000),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  JWT_SECRET_KEY: z
    .string()
    .min(10, 'JWT_SECRET_KEY must be at least 10 characters long'),
  DATABASE_URL: z.string().min(1, 'Database url error'),
  REDIS_URL: z.string().min(1, 'Redis host error'),
});

export type Env = z.infer<typeof envSchema>;

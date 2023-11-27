import { FastifyRequest } from 'fastify';

export type BlogItem = Array<{ id: number; title: string }>;

export type Request = FastifyRequest<{
  Params: { id: string };
  Body: { title: string };
}>;

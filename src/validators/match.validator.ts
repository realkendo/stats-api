import {z} from "zod/v3";

export const createMatchSchema = z.object({
  homeTeam: z.string().min(1),
  awayTeam: z.string().min(1),
  homeScore: z.number().int().nonnegative(),
  awayScore: z.number().int().nonnegative(),
  playedAt: z.string().datetime()
});

export type CreateMatchInput = z.infer<typeof createMatchSchema>;


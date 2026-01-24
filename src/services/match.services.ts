import {Match} from "../domain/match.domain";
import { randomUUID } from "crypto";

export class MatchService {
  private matches: Match[] = [];

  create(input: Omit<Match, "id" | "createdAt">): Match {
    const match: Match = {
      ...input, 
      id: randomUUID(),
      createdAt: new Date(),
    };

    this.matches.push(match);
    return match;
  }

  list(): Match[]{
    return this.matches;
  }
}
import {Match} from "../domain/match.domain";

export interface MatchRepository{
  save(match: Match) : Match,
  findAll(): Match[];
}


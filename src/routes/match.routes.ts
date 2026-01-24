import { Router } from "express";
import { validate } from "../middleware/validate.middleware";
import {createMatchSchema}  from "../validators/match.validator";
import { MatchService } from "../services/match.services";

const router = Router();
const service = new MatchService();

router.post(
  "/matches", 
  validate(createMatchSchema), 
  (req, res) => {
    const match = service.create({
      ...req.body, 
      playedAt: new Date(req.body.playedAt),
    });

  res.status(201).json(match)
});

export default router;
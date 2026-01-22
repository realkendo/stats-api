import { Router } from "express";
import { validate } from "../middleware/validate.middleware";
import {createMatchSchema}  from "../validators/match.validator";

const router = Router();

router.post(
  "/matches", 
  validate(createMatchSchema), 
  (req, res) => {

  res.status(201).json({
    message: "Match Created",
    data: req.body,
  })
});

export default router;
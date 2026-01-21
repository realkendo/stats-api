import {Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response)=>{
  res.send(`Helllo world ${Date.now()}`);
});

router.get("/user", (req: Request, res: Response)=>{
  res.send(`Welcome to the user route ${Date.now()}`);
});

export default router;
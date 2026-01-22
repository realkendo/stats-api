import { ZodTypeAny } from "zod/v3";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export const validate = 
  (schema: ZodTypeAny) => 
  (req:Request, res: Response, next: NextFunction) => {

    const result = schema.safeParse(req.body);

    if(!result.success){
      throw new AppError("Invalid request data", 400);
    }

    req.body = result.data;
    next();
}



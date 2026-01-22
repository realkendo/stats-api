import { Router } from "express";


const router = Router();

router.get("/", (_, res)=>{
  res.json({
    status: "ok",
    timestamp: Date.now()
  })
})

router.get("/user", (_, res)=>{
  res.json({
    message: "Welcome to the user route",
    timestamp: Date.now()
  })
})


export default router;
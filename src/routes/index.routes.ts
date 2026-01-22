import {Router} from "express";
import matchRoutes from "../routes/match.routes";
import healthRoutes from "../routes/health.routes";


const router = Router();

router.use("/", healthRoutes);
router.use("/api", matchRoutes);


// global 404 route handler
router.use((_, res)=>{
  res.status(404).json({
    message: "Route unavailable",
    timestamp: Date.now()
  })
})

export default router;
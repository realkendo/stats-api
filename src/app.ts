import express, {Application} from "express";
import routes from "./routes/index.routes";
import logger from "./middleware/logger";
import { errorHandler } from "./middleware/error.middleware";

const app:Application = express();

app.use(express.json());
app.use(logger);

// route middleware
app.use("/", routes);

// error handler 
app.use(errorHandler);

export default app;
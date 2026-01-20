import express, {Application} from "express";
import routes from "./routes";
import logger from "./middleware/logger";

const app:Application = express();

app.use(express.json());
app.use(logger);

app.use("/", routes);

export default app;
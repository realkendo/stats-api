import "./config/env";
import app from "./app";
import {config} from "./config/index.config";


// starting server
app.listen(config.port, () => {
  console.log(`App running on port ${config.port}`);
});


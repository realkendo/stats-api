import express, { Request, Response, Application } from 'express';

const app:Application = express();
const port = process.env.PORT || 3000;

app.get("/", (req:Request, res:Response) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

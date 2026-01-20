import app from "./app";


// assigning port - with cated type
const port = Number(process.env.PORT) || 3000;


// starting server
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});


import express from "express";

const app = express();

const PORT = 8000;

app.listen(PORT, () =>
  console.log(`Your server is running on on port:${PORT}`)
);

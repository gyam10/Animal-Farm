import express from "express";

const app = express();

app.listen(4500, "localhost", () => {
  console.log("Server is running");
});

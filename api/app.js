const express = require("express");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.listen(4500, "localhost", (err) => {
  if (err) {
    console.log("App", err);
    console.log("Error listening to the server");
  }
  console.log("Server is running  press CTRL+C to exit");
});

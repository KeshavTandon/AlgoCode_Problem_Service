const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
const { PORT } = require("./config/server.config");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter); //any request that starts with /api will be mapped to the apiRouter

app.get("/ping", (req, res) => {
  return res.json({ message: "Problem Service is alive" });
}); //for routing

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server started at PORT:${PORT}`);
  await connectToDB();
  console.log("Connected to DB");
  
});

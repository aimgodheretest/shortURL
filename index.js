require("dotenv").config();
const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./config/db");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

connectToMongoDB()
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));

app.use("/", urlRoute);
app.get("/", urlRoute);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

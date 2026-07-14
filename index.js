require("dotenv").config();
const express = require("express");
let ejs = require("ejs");
const path = require("path");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRoute");
const { connectToMongoDB } = require("./config/db");

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToMongoDB()
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));

app.use("/", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

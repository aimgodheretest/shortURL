require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const { connectToMongoDB } = require("./config/db");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");
let ejs = require("ejs");
const path = require("path");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRoute");
const userRoute = require("./routes/user");

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectToMongoDB()
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => console.log(error));

app.use("/", checkAuth, staticRoute);
app.use("/", userRoute);
app.use("/", restrictToLoggedinUserOnly, urlRoute);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

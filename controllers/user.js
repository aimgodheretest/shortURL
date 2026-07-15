const { v4: uuidv4 } = require("uuid");
const User = require("../models/user");
const { setUser, getUser } = require("../service/auth");

async function createuserSignup(req, res) {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  return res.redirect("/");
}

async function userLogin(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
    password,
  });

  if (!user)
    return res.render("login", { error: "ivalid username or password" });

  const token = setUser(user);
  // res.cookie("uid", token);
  return res.json({ token });
}

module.exports = {
  createuserSignup,
  userLogin,
};

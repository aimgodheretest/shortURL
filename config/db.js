const mongoose = require("mongoose");

async function connectToMongoDB() {
  return mongoose.connect(process.env.MONGO_URI);
}

module.exports = { connectToMongoDB };

const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (e) {
    console.error(e);
  }
};
module.exports = connectDb;

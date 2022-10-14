const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    }, 
    name: {
      type: String,
      unique: true,
      required: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports= mongoose.model("User", UserSchema);
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  nickname: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  }
  /*
  articles: [
    {
      type: Schema.Types.ObjectId,
      ref: "article",
    },
  ],
  */
});

const userModel = model("user", userSchema);
export default userModel;
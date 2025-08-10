import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user", "moderator"],
      default: "user",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  },
);

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
  usernameLowerCase: true,
});

export default mongoose.model("User", userSchema);

import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "member" },
    membershipActive: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);

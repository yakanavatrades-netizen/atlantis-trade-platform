
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password, name } = await req.json();

    if (!email || !password)
      return new Response("Missing data", { status: 400 });

    const userExists = await User.findOne({ email });
    if (userExists)
      return new Response("Email already registered", { status: 409 });

    const hashed = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashed,
      name,
      role: "member",
      membershipActive: false,
    });

    return new Response("User created", { status: 201 });
  } catch (error) {
    return new Response("Server error", { status: 500 });
  }
}


import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) return new Response("Invalid credentials", { status: 401 });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return new Response("Invalid credentials", { status: 401 });

    // Create secure cookie session
    cookies().set("sessionUser", user._id.toString(), {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return new Response("Login success", { status: 200 });
  } catch (error) {
    return new Response("Server error", { status: 500 });
  }
}

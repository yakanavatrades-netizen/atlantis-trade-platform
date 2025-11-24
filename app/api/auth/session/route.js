
import { cookies } from "next/headers";

export async function GET() {
  const session = cookies().get("sessionUser");
  return Response.json({ loggedIn: !!session });
}

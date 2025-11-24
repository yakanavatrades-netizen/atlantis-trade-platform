import { cookies } from "next/headers";

export async function GET() {
  const session = cookies().get("sessionUser")?.value || null;

  return new Response(
    JSON.stringify({ loggedIn: !!session }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}

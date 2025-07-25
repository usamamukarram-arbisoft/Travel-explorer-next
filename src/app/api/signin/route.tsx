import { loginDto } from "@/app/Types/Types";
import users from "@/app/user.json";

export async function POST(request: Request) {
  const body: loginDto = await request.json();

  const userMatched = users.find(
    (user) => user.email === body.email && user.password === body.password
  );

  if (!userMatched) {
    return new Response(
      JSON.stringify({ message: "Invalid Email or Password" }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(JSON.stringify(userMatched), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

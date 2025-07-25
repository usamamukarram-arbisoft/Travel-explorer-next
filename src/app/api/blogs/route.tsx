import { blogList } from "@/app/Types/Types";
import blogData from "@/app/blogs.json";

export async function GET() {
  const blogs: blogList[] = blogData;
  console.log("🚀 ~ get ~ blogs:", blogs);
  return new Response(JSON.stringify(blogs), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

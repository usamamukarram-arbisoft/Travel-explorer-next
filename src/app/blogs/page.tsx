import React from "react";
import { blogList } from "../Types/Types";
import BlogCard from "../UI/BlogCard";

const getBlogs = async () => {
  const response = await fetch("http://localhost:3000/api/blogs", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
const page = async () => {
  const blogs = await getBlogs();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-500 mb-8">
        Blogs
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.map((blog: blogList) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default page;

"use client";
import React from "react";
import { blogProps } from "../Types/Types";
import Link from "next/link";

const BlogCard = ({ blog }: blogProps) => {
  return (
    <>
      <Link href={`/blogs/${blog.id}`} key={blog.id}>
        <div className="group relative rounded-xl border  border-gray-200 p-4 shadow-md hover:shadow-lg transition">
          <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
            <img
              src={blog.images[0]}
              alt={blog.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-500">
            {blog.name}
          </h3>
          <p className="text-sm text-gray-400">{blog.location}</p>
          <p
            className="mt-2 text-sm text-gray-400 overflow-hidden text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {blog.description}
          </p>
          <p className="mt-2 text-sm text-cyan-500 font-medium">
            {blog.famous_for}
          </p>
          <div className="mt-4 text-yellow-500 text-sm">
            {"⭐".repeat(blog.rating)}
            {"☆".repeat(5 - blog.rating)}
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;

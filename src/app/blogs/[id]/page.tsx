"use client";
import blogData from "@/app/blogs.json";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CarouselImg from "@/app/UI/Carousel";
import Rating from "@/app/UI/Rating";
import { useParams } from "next/navigation";

const BlogDetailPage = () => {
  const params = useParams();
  const blogId = parseInt(params?.id as string);
  const blog = blogData.find((b) => b.id === blogId);
  const RATING = [1, 2, 3, 4, 5];

  if (!blog) {
    return <div className="p-6 text-red-500">Blog not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-6 ">
        <h1 className="text-4xl font-bold text-gray-900">{blog.name}</h1>
        <p className="text-muted-foreground">{blog.location}</p>
      </div>

      <div className="lg:col-span-2 space-y-6">
        <CarouselImg images={blog.images} />

        <Card>
          <CardHeader className="text-lg font-semibold">Description</CardHeader>
          <CardContent className="space-y-2 text-gray-700">
            <p>{blog.description}</p>
            <p>
              <strong>Location:</strong> {blog.location}
            </p>
            <p>
              <strong>Best time to visit:</strong> {blog.best_time_to_visit}
            </p>
            <p>
              <strong>Visited by:</strong> {blog.visited_by}
            </p>
            <p>
              <Rating Rating={RATING} blogRating={blog.rating} />{" "}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader className="text-lg font-semibold">Famous For</CardHeader>
          <CardContent>
            <p className="text-gray-700">{blog.famous_for}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-lg font-semibold">
            Top Attractions
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside text-gray-700">
              {blog.attractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-lg font-semibold">Comments</CardHeader>
          <CardContent className="space-y-2">
            {blog.comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-md"
              >
                {comment}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogDetailPage;

// app/blogs/page.tsx

// Simulated async data fetching
const getPosts = async () => {
  return [
    { id: 1, title: "Exploring the Mountains" },
    { id: 2, title: "A Day at the Beach" },
    { id: 3, title: "City Lights and Night Life" },
  ];
};

// Server Component (default in app/)
const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        Blog Posts
      </h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 bg-white dark:bg-gray-800 rounded shadow hover:shadow-md transition"
          >
            {post.title}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogPage;

import BlogList from "@/components/BlogList";

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <BlogList posts={posts.slice(0, 10)} />
    </main>
  );
}

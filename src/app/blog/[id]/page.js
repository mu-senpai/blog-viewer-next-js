import { fetchPost } from '../../../lib/api';
import Link from 'next/link';

export default async function BlogDetails({ params }) {
  const { id } = params;
  const post = await fetchPost(id);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
      <p className="mt-4 text-sm text-gray-500">Post ID: {post.id}</p>
      <Link
        href="/"
        className="mt-6 inline-block text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>
    </main>
  );
}

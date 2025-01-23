import Link from 'next/link';

export default function BlogList({ posts }) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={`/blog/${post.id}`}
            className="text-blue-600 hover:underline"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

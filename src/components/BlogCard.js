import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogCard({ posts }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Card
          key={post.id}
          className="flex flex-col justify-between p-4 bg-gray-50 border border-gray-200 shadow-md h-full"
        >
          <div>
            <CardHeader className="p-0">
              <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
            </CardHeader>
          </div>
          <CardFooter className="p-0 mt-4 flex justify-between items-center">
            <p className="text-sm text-gray-500">Post ID: {post.id}</p>
            <Link href={`/blog/${post.id}`}>
              <Button variant="outline">Details</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

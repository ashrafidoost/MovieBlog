import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

export default async function Post({ params }) {
  const id = Number((await params).id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </main>
  );
}

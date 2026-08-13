import { posts } from "@/data/posts";

export default function Posts() {
  return (
    <main>
      <center>
        <h2>Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </center>
    </main>
  );
}

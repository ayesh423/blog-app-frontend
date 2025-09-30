import { useState } from "react";
import PostCard from "../components/PostCard";
import { Post } from "../types/Post";

const mockPosts: Post[] = [
  {
    id: 1,
    title: "My First Blog Post",
    content: "This is the content of my first blog post. It can be as long as you want.",
    author: "Ayesh",
    description : "dis one"
  },
  {
    id: 2,
    title: "Learning React with TypeScript",
    content: "React with TypeScript is powerful for building scalable front-end applications.",
    author: "Ayesh",
    description :"dis two"
  },
  {
    id: 3,
    title: "Why Front-End Development is Fun",
    content: "Front-end development allows creativity while solving real-world problems.",
    author: "Ayesh",
    description :"dis three"
  }
];

const Home: React.FC = () => {
  const [posts] = useState<Post[]>(mockPosts);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;

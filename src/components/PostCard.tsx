import { Post } from "../types/Post";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-700">
        {post.content.length > 100
          ? post.content.substring(0, 100) + "..."
          : post.content}
      </p>
      <p className="text-sm text-gray-500 mt-2">By {post.author}</p>
    </div>
  );
};

export default PostCard;

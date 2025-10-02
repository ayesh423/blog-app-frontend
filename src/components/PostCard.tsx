import { Post } from "../types/Post";
import styles from "./PostCard.module.css";

interface PostCardProps {
  post: Post;
  isNew?: boolean;
  onReadMore?: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, isNew = false, onReadMore }) => {
  return (
    <div className={`${styles.card} ${isNew ? styles.new : ''}`}>
      {/* Tags Section */}
      {post.tags && (
        <div className={styles.tags}>
          {post.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      )}
      
      <h2 className={styles.title}>{post.title}</h2>
      <label>Test label for git check</label>
      <p className={styles.content}>
        {post.content.length > 100
          ? post.content.substring(0, 100) + "..."
          : post.content}
      </p>
      
      {post.description && (
        <p className={styles.description}>{post.description}</p>
      )}
      
      <div className={styles.footer}>
        <div className={styles.author}>
          <span>By {post.author}</span>
          <span className={styles.authorBadge}>Author</span>
        </div>
        
        {post.content.length > 100 && (
          <span className={styles.readMore} onClick={onReadMore}>
            Read more
          </span>
        )}
      </div>
    </div>
  );
};

export default PostCard;
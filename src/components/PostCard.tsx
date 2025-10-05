import { Post } from "../types/Post";
import styles from "./PostCard.module.css";
import { useState } from "react";

interface PostCardProps {
  post: Post;
  isNew?: boolean;
  onReadMore?: () => void;
  onLike?: (postId: number) => void;
  onComment?: (postId: number, comment: string) => void;
  variant?: 'default' | 'gradientPrimary' | 'gradientSunset' | 'gradientOcean' | 
            'gradientNature' | 'gradientSunrise' | 'glass' | 'animatedBg' | 
            'patternDots' | 'patternGrid';
}

const PostCard: React.FC<PostCardProps> = ({ 
  post, 
  isNew = false, 
  onReadMore, 
  onLike,
  onComment,
  variant = 'default'
}) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  // Function to calculate time since post was created
  const getTimeSince = (date: Date): string => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  const handleLike = () => {
    if (onLike) {
      onLike(post.id);
    }
  };

  const handleAddComment = () => {
    if (newComment.trim() && onComment) {
      onComment(post.id, newComment.trim());
      setNewComment("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddComment();
    }
  };

  return (
    <div className={`${styles.card} ${styles[variant]} ${isNew ? styles.new : ''}`}>
      {/* User Info Section */}
      <div className={styles.userInfo}>
        <div className={styles.userAvatar}>
          {post.userProfile ? (
            <img 
              src={post.userProfile} 
              alt={post.userName} 
              className={styles.avatar}
            />
          ) : (
            <div className={styles.avatarPlaceholder}>
              {post.userName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className={styles.userDetails}>
          <span className={styles.userName}>{post.userName}</span>
          {post.createdAt && (
            <span className={styles.timestamp}>
              {getTimeSince(post.createdAt)}
            </span>
          )}
        </div>
      </div>

      {/* Media Section - Image or Video */}
      {post.imageUrl && (
        <div className={styles.mediaContainer}>
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className={styles.image}
          />
        </div>
      )}
      
      {post.videoUrl && (
        <div className={styles.mediaContainer}>
          <video 
            controls 
            className={styles.video}
          >
            <source src={post.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Tags Section */}
      {post.tags && post.tags.length > 0 && (
        <div className={styles.tags}>
          {post.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Title and Content */}
      <h2 className={styles.title}>{post.title}</h2>
      
      {post.description && (
        <p className={styles.description}>{post.description}</p>
      )}
      
      <p className={styles.content}>
        {post.content.length > 150
          ? post.content.substring(0, 150) + "..."
          : post.content}
      </p>

      {/* Post Metadata */}
      <div className={styles.metadata}>
        {post.readTime && (
          <span className={styles.readTime}>{post.readTime} min read</span>
        )}
        {post.category && (
          <span className={styles.category}>{post.category}</span>
        )}
        {post.isFeatured && (
          <span className={styles.featuredBadge}>Featured</span>
        )}
      </div>
      
      {/* Interaction Section - Likes and Comments */}
      <div className={styles.interactions}>
        <div className={styles.interactionButtons}>
          <button 
            className={styles.likeButton}
            onClick={handleLike}
          >
            <span className={styles.likeIcon}>❤️</span>
            <span>{post.likes}</span>
          </button>
          
          <button 
            className={styles.commentButton}
            onClick={() => setShowComments(!showComments)}
          >
            <span className={styles.commentIcon}>💬</span>
            <span>{post.comments.length}</span>
          </button>
        </div>

        {post.content.length > 150 && (
          <span className={styles.readMore} onClick={onReadMore}>
            Read more
          </span>
        )}
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className={styles.commentsSection}>
          <div className={styles.addComment}>
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={handleKeyPress}
              className={styles.commentInput}
            />
            <button 
              onClick={handleAddComment}
              className={styles.commentSubmit}
              disabled={!newComment.trim()}
            >
              Post
            </button>
          </div>
          
          <div className={styles.commentsList}>
            {post.comments.length === 0 ? (
              <p className={styles.noComments}>No comments yet. Be the first to comment!</p>
            ) : (
              post.comments.map((comment) => (
                <div key={comment.id} className={styles.comment}>
                  <div className={styles.commentUser}>
                    {comment.userProfile ? (
                      <img 
                        src={comment.userProfile} 
                        alt={comment.user}
                        className={styles.commentAvatar}
                      />
                    ) : (
                      <div className={styles.commentAvatarPlaceholder}>
                        {comment.user.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span className={styles.commentUserName}>{comment.user}</span>
                  </div>
                  <p className={styles.commentContent}>{comment.content}</p>
                  <span className={styles.commentTime}>
                    {getTimeSince(comment.createdAt)}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
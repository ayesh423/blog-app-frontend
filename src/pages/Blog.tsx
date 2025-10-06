import React, { useState } from 'react';
import '../CSSfiles/Blog.css';

interface Comment {
  id: number;
  user: string;
  content: string;
  createdAt: Date;
  userProfile?: string;
}

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  description: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  readTime?: number;
  category?: string;
  imageUrl?: string;
  videoUrl?: string;
  isFeatured?: boolean;
  likes: number;
  comments: Comment[];
  userProfile?: string;
  userName: string;
}

const Blog: React.FC = () => {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      title: 'Getting Started with React and TypeScript',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      author: 'John Doe',
      description: 'Learn how to set up a React project with TypeScript and build your first component.',
      tags: ['React', 'TypeScript', 'Web Development'],
      createdAt: new Date('2024-01-15'),
      readTime: 5,
      category: 'Web Development',
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      isFeatured: true,
      likes: 42,
      comments: [
        {
          id: 1,
          user: 'Jane Smith',
          content: 'Great tutorial! Very helpful for beginners.',
          createdAt: new Date('2024-01-16'),
          userProfile: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face'
        }
      ],
      userName: 'John Doe',
      userProfile: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
    },
    {
      id: 2,
      title: 'Mastering CSS Grid Layout',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      author: 'John Doe',
      description: 'A comprehensive guide to CSS Grid Layout with practical examples and use cases.',
      tags: ['CSS', 'Web Design', 'Layout'],
      createdAt: new Date('2024-01-10'),
      readTime: 8,
      category: 'Web Design',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      likes: 28,
      comments: [],
      userName: 'John Doe',
      userProfile: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face'
    }
  ]);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  const handleLike = (postId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedPost) {
    const isLiked = likedPosts.has(selectedPost.id);
    const likeCount = isLiked ? selectedPost.likes + 1 : selectedPost.likes;

    return (
      <div className="blog-post-detail">
        <button className="back-button" onClick={handleBackToList}>
          ← Back to Posts
        </button>
        <article className="post-content">
          <header className="post-header">
            {selectedPost.imageUrl && (
              <div className="post-image">
                <img src={selectedPost.imageUrl} alt={selectedPost.title} />
              </div>
            )}
            <h1>{selectedPost.title}</h1>
            <div className="post-meta">
              <div className="author-info">
                <img 
                  src={selectedPost.userProfile} 
                  alt={selectedPost.userName}
                  className="author-avatar"
                />
                <div>
                  <div className="author-name">{selectedPost.userName}</div>
                  <div className="post-date">
                    {formatDate(selectedPost.createdAt!)}
                  </div>
                </div>
              </div>
              <div className="post-stats">
                <span>{selectedPost.readTime} min read</span>
                <span>•</span>
                <span>{likeCount} likes</span>
                <span>•</span>
                <span>{selectedPost.comments.length} comments</span>
              </div>
            </div>
            {selectedPost.tags && selectedPost.tags.length > 0 && (
              <div className="post-tags">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            )}
          </header>
          
          <div className="post-body">
            <p>{selectedPost.content}</p>
            
            <div className="social-interactions">
              <button 
                className={`like-button ${isLiked ? 'liked' : ''}`}
                onClick={(e) => handleLike(selectedPost.id, e)}
              >
                ❤️ {likeCount}
              </button>
            </div>

            <div className="comments-section">
              <h3>Comments ({selectedPost.comments.length})</h3>
              {selectedPost.comments.length > 0 ? (
                <div className="comments-list">
                  {selectedPost.comments.map(comment => (
                    <div key={comment.id} className="comment">
                      <div className="comment-header">
                        <img 
                          src={comment.userProfile} 
                          alt={comment.user}
                          className="comment-avatar"
                        />
                        <div className="comment-user">{comment.user}</div>
                        <div className="comment-date">
                          {formatDate(comment.createdAt)}
                        </div>
                      </div>
                      <div className="comment-content">{comment.content}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-comments">No comments yet. Be the first to comment!</p>
              )}
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>My Blog</h1>
        <p>Thoughts, tutorials, and insights about web development</p>
      </header>

      <div className="blog-posts">
        {posts.map(post => {
          const isLiked = likedPosts.has(post.id);
          const likeCount = isLiked ? post.likes + 1 : post.likes;

          return (
            <article key={post.id} className="blog-post" onClick={() => handlePostClick(post)}>
              <div className="post-card">
                {post.imageUrl && (
                  <div className="post-thumbnail">
                    <img src={post.imageUrl} alt={post.title} />
                  </div>
                )}
                <div className="post-content-preview">
                  <div className="post-meta-preview">
                    <span className="post-date">
                      {formatDate(post.createdAt!)}
                    </span>
                    <span className="read-time">{post.readTime} min read</span>
                  </div>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-description">{post.description}</p>
                  <div className="post-footer">
                    <div className="post-tags">
                      {post.tags && post.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="post-stats-preview">
                      <span className="likes">❤️ {likeCount}</span>
                      <span className="comments">💬 {post.comments.length}</span>
                    </div>
                  </div>
                  <div className="post-author-preview">
                    <img 
                      src={post.userProfile} 
                      alt={post.userName}
                      className="author-avatar-small"
                    />
                    <span>{post.userName}</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
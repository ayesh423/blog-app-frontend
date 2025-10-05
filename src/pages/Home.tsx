import { useState } from "react";
import PostCard from "../components/PostCard";
import { Post } from "../types/Post";
import styles from "../components/PostCard.module.css";

const mockPosts: Post[] = [
  {
    id: 1,
    title: "My First Blog Post",
    content: "This is the content of my first blog post. It can be as long as you want. React is amazing for building user interfaces! We'll explore more about React components and hooks in this comprehensive guide.",
    author: "Ayesh",
    description: "A beginner's journey into React development",
    userName: "Ayesh Karunanayake",
    userProfile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    likes: 15,
    comments: [
      {
        id: 1,
        user: "John Doe",
        content: "Great post! Very informative and well written. Looking forward to more content!",
        createdAt: new Date(Date.now() - 3600000),
        userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
      },
      {
        id: 2,
        user: "Jane Smith",
        content: "This helped me understand React better. Thanks for sharing!",
        createdAt: new Date(Date.now() - 7200000),
      }
    ],
    tags: ["react", "beginners", "webdev"],
    createdAt: new Date(Date.now() - 86400000),
    readTime: 5,
    category: "Programming",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
    isFeatured: true
  },
  {
    id: 2,
    title: "Learning React with TypeScript",
    content: "React with TypeScript is powerful for building scalable front-end applications. The type safety helps catch errors early and makes the development experience much better. In this post, we'll explore advanced TypeScript patterns.",
    author: "Ayesh",
    description: "Master TypeScript with React for better code quality",
    userName: "Ayesh Karunanayake",
    userProfile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    likes: 8,
    comments: [
      {
        id: 1,
        user: "Mike Chen",
        content: "TypeScript has completely changed how I write React apps. Great overview!",
        createdAt: new Date(Date.now() - 1800000),
      }
    ],
    tags: ["react", "typescript", "webdev", "advanced"],
    createdAt: new Date(Date.now() - 172800000),
    readTime: 8,
    category: "Web Development"
  },
  {
    id: 3,
    title: "Why Front-End Development is Fun",
    content: "Front-end development allows creativity while solving real-world problems. You get immediate visual feedback and can see your work come to life instantly. The modern front-end ecosystem is incredibly rich and diverse.",
    author: "Ayesh",
    description: "Discover the joy of front-end development",
    userName: "Ayesh Karunanayake",
    userProfile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    likes: 23,
    comments: [
      {
        id: 1,
        user: "Sarah Johnson",
        content: "Totally agree! The instant gratification is amazing. Love seeing designs come to life.",
        createdAt: new Date(Date.now() - 1800000),
      },
      {
        id: 2,
        user: "Alex Kumar",
        content: "The front-end world moves so fast, it's always exciting to learn new things!",
        createdAt: new Date(Date.now() - 3600000),
      }
    ],
    tags: ["frontend", "career", "web", "design"],
    createdAt: new Date(Date.now() - 259200000),
    readTime: 4,
    category: "Career",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use What",
    content: "Understanding when to use CSS Grid versus Flexbox can significantly improve your layout skills. Grid is great for two-dimensional layouts, while Flexbox excels in one-dimensional layouts. Let's dive deep into both!",
    author: "Ayesh",
    description: "A comprehensive guide to CSS layout systems",
    userName: "Ayesh Karunanayake",
    userProfile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    likes: 12,
    comments: [],
    tags: ["css", "grid", "flexbox", "layout"],
    createdAt: new Date(Date.now() - 345600000),
    readTime: 6,
    category: "CSS",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox: When to Use What",
    content: "Understanding when to use CSS Grid versus Flexbox can significantly improve your layout skills. Grid is great for two-dimensional layouts, while Flexbox excels in one-dimensional layouts. Let's dive deep into both!",
    author: "Ayesh",
    description: "A comprehensive guide to CSS layout systems",
    userName: "Ayesh Karunanayake",
    userProfile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    likes: 12,
    comments: [],
    tags: ["css", "grid", "flexbox", "layout"],
    createdAt: new Date(Date.now() - 345600000),
    readTime: 6,
    category: "CSS",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
  }
];

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  
  const variants: Array<'default' | 'gradientPrimary' | 'gradientSunset' | 'gradientOcean' | 'gradientNature' | 'gradientSunrise' | 'glass' | 'animatedBg' | 'patternDots' | 'patternGrid'> = [
    'gradientPrimary', 'gradientSunset', 'gradientOcean', 'gradientNature', 
    'gradientSunrise', 'glass', 'animatedBg', 'patternDots', 'patternGrid'
  ];

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const handleComment = (postId: number, commentContent: string) => {
    const newComment = {
      id: Date.now(),
      user: "Current User",
      content: commentContent,
      createdAt: new Date(),
      userProfile: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    };

    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, newComment] }
        : post
    ));
  };

  const handleReadMore = (postId: number) => {
    // In a real app, this would navigate to the full post
    console.log("Read more clicked for post:", postId);
    alert(`Navigating to full post ${postId}`);
  };

  return (
    <div className={styles.container}>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 text-gray-800">
            Modern Blog Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing content with beautiful cards, social interactions, and stunning visuals
          </p>
        </header>

        <div className="grid gap-8">
          {posts.map((post, index) => (
            <PostCard 
              key={post.id} 
              post={post} 
              variant={variants[index % variants.length]}
              onReadMore={() => handleReadMore(post.id)}
              onLike={handleLike}
              onComment={handleComment}
              isNew={index === 0}
            />
          ))}
        </div>

        <footer className="text-center mt-16 py-8 border-t border-gray-200">
          <p className="text-gray-600">
            {posts.length} amazing posts • {posts.reduce((acc, post) => acc + post.likes, 0)} total likes
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
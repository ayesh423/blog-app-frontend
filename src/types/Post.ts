export interface Comment {
  id: number;
  user: string;
  content: string;
  createdAt: Date;
  userProfile?: string;
}

export interface Post {
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
  
  // New fields for social features
  likes: number;
  comments: Comment[];
  userProfile?: string;
  userName: string;
}
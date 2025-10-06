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

export interface User {
  id: number;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  joinDate: string;
  website?: string;
  socialMedia: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
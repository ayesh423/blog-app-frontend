export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  description: string; // ✅ Fixed spelling
  tags?: string[];     // For the tag feature
  createdAt?: Date;    // For post date
  updatedAt?: Date;    // For last update
  readTime?: number;   // For read time in minutes
  category?: string;   // For post category
  imageUrl?: string;   // For featured images
  isFeatured?: boolean; // For highlighting featured posts
}
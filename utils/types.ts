// utils/types.ts

export type Post = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    excerpt: string;
    body: object[];
    author: Author;
    tags: Tag[];
  }
  
  export type Author = {
    _id: string;
    name: string;
    bio: string;  
  }
  
  export type Tag = {
    _id: string;
    name: string;
  }
  
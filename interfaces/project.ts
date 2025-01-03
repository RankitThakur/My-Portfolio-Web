import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface Project {
  id?: string;
  slug?: string;
  description?: string;
  title?: string;
  likes?: number;
  content?: string;
  serializedContent?: MDXRemoteSerializeResult;
  status?: "DEVELOPMENT" | "PRODUCTION";
  url?: string;
  author?: any;
  preview_image?: {
    url: string;
    formats: {
      large?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      thumbnail?: { url: string };
    };
  };
  featured: boolean;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
}

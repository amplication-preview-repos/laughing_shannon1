import { Article } from "../article/Article";
import { Comment } from "../comment/Comment";

export type Author = {
  articles?: Array<Article>;
  bio: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};

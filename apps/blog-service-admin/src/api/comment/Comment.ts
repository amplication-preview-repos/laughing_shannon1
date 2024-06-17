import { Article } from "../article/Article";
import { Author } from "../author/Author";

export type Comment = {
  article?: Article | null;
  author?: Author | null;
  content: string | null;
  createdAt: Date;
  id: string;
  postedAt: Date | null;
  updatedAt: Date;
};

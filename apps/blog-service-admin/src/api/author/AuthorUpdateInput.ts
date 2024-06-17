import { ArticleUpdateManyWithoutAuthorsInput } from "./ArticleUpdateManyWithoutAuthorsInput";
import { CommentUpdateManyWithoutAuthorsInput } from "./CommentUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  articles?: ArticleUpdateManyWithoutAuthorsInput;
  bio?: string | null;
  comments?: CommentUpdateManyWithoutAuthorsInput;
  email?: string | null;
  name?: string | null;
};

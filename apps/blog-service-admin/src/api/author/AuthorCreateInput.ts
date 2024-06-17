import { ArticleCreateNestedManyWithoutAuthorsInput } from "./ArticleCreateNestedManyWithoutAuthorsInput";
import { CommentCreateNestedManyWithoutAuthorsInput } from "./CommentCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  articles?: ArticleCreateNestedManyWithoutAuthorsInput;
  bio?: string | null;
  comments?: CommentCreateNestedManyWithoutAuthorsInput;
  email?: string | null;
  name?: string | null;
};

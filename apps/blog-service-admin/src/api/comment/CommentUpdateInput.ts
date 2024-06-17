import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type CommentUpdateInput = {
  article?: ArticleWhereUniqueInput | null;
  author?: AuthorWhereUniqueInput | null;
  content?: string | null;
  postedAt?: Date | null;
};

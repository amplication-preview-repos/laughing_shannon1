import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CommentWhereInput = {
  article?: ArticleWhereUniqueInput;
  author?: AuthorWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  postedAt?: DateTimeNullableFilter;
};

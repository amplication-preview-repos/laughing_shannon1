import { ArticleListRelationFilter } from "../article/ArticleListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuthorWhereInput = {
  articles?: ArticleListRelationFilter;
  bio?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AuthorService } from "../author.service";
import { AuthorCreateInput } from "./AuthorCreateInput";
import { Author } from "./Author";
import { AuthorFindManyArgs } from "./AuthorFindManyArgs";
import { AuthorWhereUniqueInput } from "./AuthorWhereUniqueInput";
import { AuthorUpdateInput } from "./AuthorUpdateInput";
import { ArticleFindManyArgs } from "../../article/base/ArticleFindManyArgs";
import { Article } from "../../article/base/Article";
import { ArticleWhereUniqueInput } from "../../article/base/ArticleWhereUniqueInput";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";

export class AuthorControllerBase {
  constructor(protected readonly service: AuthorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Author })
  async createAuthor(@common.Body() data: AuthorCreateInput): Promise<Author> {
    return await this.service.createAuthor({
      data: data,
      select: {
        bio: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Author] })
  @ApiNestedQuery(AuthorFindManyArgs)
  async authors(@common.Req() request: Request): Promise<Author[]> {
    const args = plainToClass(AuthorFindManyArgs, request.query);
    return this.service.authors({
      ...args,
      select: {
        bio: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Author })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async author(
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Author | null> {
    const result = await this.service.author({
      where: params,
      select: {
        bio: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Author })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAuthor(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() data: AuthorUpdateInput
  ): Promise<Author | null> {
    try {
      return await this.service.updateAuthor({
        where: params,
        data: data,
        select: {
          bio: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Author })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAuthor(
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Author | null> {
    try {
      return await this.service.deleteAuthor({
        where: params,
        select: {
          bio: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/articles")
  @ApiNestedQuery(ArticleFindManyArgs)
  async findArticles(
    @common.Req() request: Request,
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Article[]> {
    const query = plainToClass(ArticleFindManyArgs, request.query);
    const results = await this.service.findArticles(params.id, {
      ...query,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        publishedAt: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/articles")
  async connectArticles(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: ArticleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      articles: {
        connect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/articles")
  async updateArticles(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: ArticleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      articles: {
        set: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/articles")
  async disconnectArticles(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: ArticleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      articles: {
        disconnect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/comments")
  @ApiNestedQuery(CommentFindManyArgs)
  async findComments(
    @common.Req() request: Request,
    @common.Param() params: AuthorWhereUniqueInput
  ): Promise<Comment[]> {
    const query = plainToClass(CommentFindManyArgs, request.query);
    const results = await this.service.findComments(params.id, {
      ...query,
      select: {
        article: {
          select: {
            id: true,
          },
        },

        author: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        postedAt: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/comments")
  async connectComments(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        connect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comments")
  async updateComments(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        set: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comments")
  async disconnectComments(
    @common.Param() params: AuthorWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        disconnect: body,
      },
    };
    await this.service.updateAuthor({
      where: params,
      data,
      select: { id: true },
    });
  }
}

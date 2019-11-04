import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model'
import { ModelType } from '@typegoose/typegoose/lib/types';

import {Crud} from 'nestjs-mongoose-crud'
// 发帖数据
class CreatePostDto {
    @ApiModelProperty({ description: '标题', example: '帖子默认标题' })
    title: string
    @ApiModelProperty({ description: '内容', example: '帖子默认内容' })
    content: string
}
@Crud({
    model: PostSchema,
    routes: {
        find: {
            decorators: [
                ApiOperation({title: '帖子列表'})
            ]
        },
        create: {
            dto: CreatePostDto
        }
    }
})
@Controller('posts')
@ApiUseTags('博客帖子')
export class PostsController {
    constructor(
        @InjectModel(PostSchema) private readonly model: ModelType<PostSchema>
    ) {}
}

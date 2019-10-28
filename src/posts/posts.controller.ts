import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ApiUseTags, ApiOperation, ApiModelProperty } from '@nestjs/swagger';

// 发帖数据
class CreatePostDto {
    @ApiModelProperty({description: '标题'})
    title: string
    @ApiModelProperty({description: '内容'})
    content: string
}

@Controller('posts')
@ApiUseTags('博客帖子')
export class PostsController {
    @Get()
    @ApiOperation({title: '显示博客列表'})
    index() {
        return [
          
        ]
    }

    @Post()
    @ApiOperation({title: '发帖'})
    create(@Body() body: CreatePostDto) {

        return body
    }
    
    @Get(':id')
    detail() {
        return {
            id: 1,
            title: 661
        }
    }
}

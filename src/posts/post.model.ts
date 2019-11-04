import { prop } from '@typegoose/typegoose'
import { ApiModelProperty } from '@nestjs/swagger'

export class Post {
    @ApiModelProperty({ description: '标题', example: '帖子默认标题' })
    @prop()
    title: string
    @ApiModelProperty({ description: '内容', example: '帖子默认内容' })
    @prop()
    content: string

}

import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import React from 'react'
import { IPost } from '../../models/IPost'
import CommentLikeDLC from './CommentLikeDLC'


interface IPostItemProps {
    post: IPost
    action?: boolean
}

const PostItem = ({post, action = true}: IPostItemProps) => {

  return (
    <Card id={post.post_id} sx={{minHeight: 375, minWidth: 525}} >
        <CardMedia 
          image={'https://source.unsplash.com/random/300x200?sig=' + Math.random()}
          component={'img'}
          alt={post.body}

        />
        <CardContent >
          <Typography 
            variant='h4'
            component={'p'}
          >
            {post?.body}
          </Typography>
        </CardContent>
        {
          action ? 
          <CardActions>
            <CommentLikeDLC post={post}/>
          </CardActions> : 
          <></>
        }
    </Card>
  )
}

export default PostItem
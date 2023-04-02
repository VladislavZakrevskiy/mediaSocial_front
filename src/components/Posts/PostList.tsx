import React from 'react'
import { IPost } from '../../models/IPost';
import PostItem from './PostItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

interface IPostListProps {
  posts: IPost[]
}

const PostList = ({posts}: IPostListProps) => {

    return (
        <List>
            {
                posts ? posts.map((post:IPost) => 
                    <ListItem 
                        key={post.post_id}

                    >
                        <PostItem  post={post}/>
                    </ListItem>

                ):
                <h1>Нет</h1>
            }

        </List>
    )
}

export default PostList
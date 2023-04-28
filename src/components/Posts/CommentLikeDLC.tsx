import React from 'react'
import Like from './Like';
import CommentForm from '../Comments/CommentForm';
import LinkUI from '@mui/material/Link'
import { Link } from 'react-router-dom';
import CommentItem from '../Comments/CommentItem';
import { IPost } from '../../models/IPost';
import { useGetLastCommentQuery } from '../../store/reducers/rtk query/PostsApi';
import { Box } from '@mui/material';


interface ICommentLikeProps {
    post: IPost
}

const CommentLikeDLC = ({post}: ICommentLikeProps) => {
    const {data, isLoading} = useGetLastCommentQuery(post.post_id)
  return (
    <Box
      component={'div'}
    >
        {
          !isLoading ? 
          <CommentItem comment={data}/>
          : false
        }
        <Box
          component='div'
          margin={2}
        >
          <Link 
              style={{
                textDecoration: 'none'
              }}
              to={'/comments/' + post.post_id}>
            <LinkUI
              underline='none'
            >
              Комментарии
            </LinkUI>
          </Link>
        </Box>
        <CommentForm id={post.post_id}/>
        <Like post_id={post.post_id}/>
    </Box>
  )
}

export default CommentLikeDLC
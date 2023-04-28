import React from 'react'
import { useParams } from 'react-router-dom';
import CommentList from '../../components/Comments/CommentList';
import { useGetCommentsQuery, useGetPostQuery} from '../../store/reducers/rtk query/PostsApi';
import PostItem from '../../components/Posts/PostItem';
import CommentForm from '../../components/Comments/CommentForm';
import { CircularProgress, Typography, Box } from '@mui/material';


const Comments = () => {
    const {post_id} = useParams()
    const {data, isLoading} = useGetCommentsQuery(post_id)
    const {data: post, isLoading: isPostLoading} = useGetPostQuery(post_id)
    return (
        <Box
            component={'div'}
        >
            {
                isPostLoading ?
                <CircularProgress/> : 
                <PostItem action={false} post={post}/>
            }
            <Box 
                component='div'
                display='flex'
                alignItems={'flex-start'}
                flexDirection={'column'}
            >
                <Typography
                    variant='h4'
                    component='h5'
                    margin={4}
                >
                    Комментарии
                </Typography>
                {
                    !isLoading ?
                    <CommentList comments={data}/>
                    : false
                }
                <Box
                    component={'div'}
                >
                    <CommentForm id={post_id}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Comments
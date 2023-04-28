import React from 'react'
import { IComment } from '../../models/IComment';
import Box from '@mui/material/Box';
import { Typography, Avatar } from '@mui/material';

interface ICommentItemProps {
    comment: IComment | undefined
}
const CommentItem = ({comment}:ICommentItemProps) => {

  if(!comment){
    return (<></>)
  }

  return (
    <Box
      component='div'
      margin={2}
    >
        <Box
          component={'div'}
          display='flex'
          flexDirection='row'
          alignItems={'center'}
        >
          <Avatar
            alt={comment?.username}
            sx={{mr: 2, ml: 2}}
          />
          <Typography
            component='h5'
            variant='h5'
            ml={2}
          >
            {comment?.username}
          </Typography>
        </Box>
          <Typography
            component='h6'
            variant='h6'
          >
            {comment?.body}
          </Typography>  
    </Box>
  )
}

export default CommentItem
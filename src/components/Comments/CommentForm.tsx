import React, {useState} from 'react'
import { useCreateCommentMutation } from '../../store/reducers/rtk query/PostsApi'
import { useAppSelector } from '../../hooks/reduxHooks';
import Box from '@mui/material/Box'
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'

interface ICommentFormProps {
    id: string | undefined
}

const CommentForm = ({id}: ICommentFormProps) => {
    const [comment, setComment] = useState('')
    const [createComment, {isSuccess}] = useCreateCommentMutation()
    const {user} = useAppSelector(state => state.AuthReducer)

    const handleCreateComment = () => {
        createComment({body: comment, post_id: id, user_id: user?.user_id})
        setComment('')
    }

    return (
        <Box
            component={'div'} 
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <TextField 
                type="text" 
                value={comment}
                onChange={e => setComment(e.target.value)}
                multiline
                maxRows={4}
            />
            <Button 
                onClick={handleCreateComment}
                endIcon={<SendIcon/>}
            >Отправить
            </Button>
        </Box>
    )
}

export default CommentForm
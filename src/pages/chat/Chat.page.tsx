import React, {useState, useEffect, useRef} from 'react'
import ChatContainer from '../../components/Chat/Chat';
import ChatsNav from '../../components/Chat/ChatsNav';
import MessageForm from '../../components/Chat/MessageForm';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { ChatService } from '../../services/ChatService';
import { Box, CircularProgress, Typography } from '@mui/material';




const Chat = () => {

  const {users, isLoading} = useAppSelector(state => state.ChatSlice)

  return (
    <div>
      {
        isLoading ? <CircularProgress/>
        :
        <div>
          <ChatsNav/>
          <Box component={'div'} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Typography fontSize={24}>Пусто</Typography>
          </Box>
      </div>
      }
    </div>
  )
}

export default Chat
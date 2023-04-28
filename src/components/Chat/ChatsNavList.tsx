import React, {useEffect, useState} from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { Link } from 'react-router-dom';
import { IChatResponse } from '../../models/IUser';
import { getUsers } from '../../store/reducers/rtk async/Chat';
import $api from '../../http';
import { useGetChatNavQuery } from '../../store/reducers/rtk query/ChatApi';
import { Box, CircularProgress, Typography } from '@mui/material';

type Props = {}

const ChatsNavList = (props: Props) => {
    const {data, isLoading} = useGetChatNavQuery({})
    console.log(data)
    if(isLoading){
      return (
          <CircularProgress/>
        )
    }
    return (
      <div>
          {
          data ? data.map((user: IChatResponse) => 
                  <Box key={user.to_id} sx={{backgroundColor: '#1976d2', margin: 1, padding: 2, borderRadius: 15, color: 'white'}}>
                      <Link style={{color: 'white',textDecoration: 'none', fontSize: 24}} to={'/chat/' + user.chat_id}>
                        {user.first_name} {user.last_name}
                      </Link>
                  </Box>
              ): <Typography >
                Чатов пока нет
                </Typography>
          }
        </div>
    )
}

export default ChatsNavList
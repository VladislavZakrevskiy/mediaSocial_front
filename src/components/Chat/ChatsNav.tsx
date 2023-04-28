import React from 'react'
import { IChatResponse } from '../../models/IUser'
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import ChatsNavList from './ChatsNavList';
import { CircularProgress } from '@mui/material';

interface IChatsNav {
    users: IChatResponse[] | null
}

const ChatsNav = () => {
  const {isLoading, users} = useAppSelector(state => state.ChatSlice)

  return (
    <div>
        {
          isLoading ? <CircularProgress/>
          : 
          <ChatsNavList/>
        }
    </div>
  )
}

export default ChatsNav
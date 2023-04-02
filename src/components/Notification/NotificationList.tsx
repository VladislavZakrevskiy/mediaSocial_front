import React from 'react'
import { INote } from '../../models/INote';
import NotificationItem from './NotificationItem';
import { Box, CircularProgress, Typography } from '@mui/material';

interface INotesListProps {
  notes: INote[]
  API: 
  {
    isLoading: boolean
    isError: boolean
  }
}

const NotificationList = ({notes, API}: INotesListProps) => {

  if(API.isLoading) {
    return (<CircularProgress/>)
  }

  if(API.isError) {
    return (
    <Typography>
      Ошибка 
    </Typography>
    
    )
  }

  return (
    <Box component={'div'} display={"flex"} flexDirection={"column"} justifyContent={'center'} alignItems={'center'} gap={1}>
       {
        notes[0] ? notes.map((note: INote) => <NotificationItem note={note}/>) : <Typography>Уведомлений нет</Typography>
       } 
    </Box>
  )
}

export default NotificationList
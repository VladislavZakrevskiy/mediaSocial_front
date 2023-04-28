import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks';
import { INote } from '../../models/INote';
import { useActivateFriendMutation, useDeleteNotificationMutation, useWatchNotificationMutation } from '../../store/reducers/rtk query/NotificationApi';
import { Box, Button, Typography } from '@mui/material';

interface INotificationItemProps {
    note: INote
}

const NotificationItem = ({note}:INotificationItemProps) => {

  const [isWatched, setIsWatched] = useState(false)
  const [deleteNote, {}] = useDeleteNotificationMutation()
  const [watchNote, {}] = useWatchNotificationMutation()
  const [activateFriend, {}] = useActivateFriendMutation()
  const {user } = useAppSelector(state => state.AuthReducer)

  const handleDelete = () => {
    deleteNote(note.notification_id)
  }

  const handleWatch = () => {
    watchNote(note.notification_id)
    setIsWatched(true)
  }

  const handleActivate = () => {
    activateFriend({friend_id:note.do_by_user , user_id: user?.user_id})
  }

  return (
    <Box component={'div'} display={"flex"} flexDirection={"column"} justifyContent={'center'} alignItems={'center'} gap={2}>
        <Typography sx={{opacity: .7}} variant='h6'>{note.type}</Typography>
        <Typography variant='h4' fontWeight={'bold'}>От: {note.username}</Typography>
        <Typography variant='h5'>{note.body}</Typography>
        <Typography variant='h6'>{new Date(+note.created_at).toDateString()}</Typography>
        <Button onClick={handleActivate}>Подтвердить</Button>
        {
          !note.is_watched || isWatched ? 
          <Button onClick={handleWatch}>Просмотрено</Button>
          : false
        }
        <Button onClick={handleDelete}>Удалить</Button>
    </Box>
  )
}

export default NotificationItem
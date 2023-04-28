import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { IUser } from '../../models/IUser'

interface IFriendItemProps {
    friend: IUser
}

const FriendItem = ({friend}: IFriendItemProps) => {
  return (
    <Box component={'div'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'row'} width={'100%'} height={'100%'}>
        <Avatar/>
        <Typography>{friend.first_name}</Typography>
        <Typography>{friend.last_name}</Typography>
    </Box>
  )
}

export default FriendItem
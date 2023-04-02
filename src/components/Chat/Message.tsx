import { Box, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'

interface IMessage {
    body: string
    id: string
}

const Message = ({body, id}:IMessage) => {
    const {user} = useAppSelector(state => state.AuthReducer)

  return (
    <Box component={'div'} sx={{alignSelf: user?.from_id == id ? 'end' : 'start', padding: 1, border: '1px solid rgba(25,118,210, .6)'}} width={'70%'} borderRadius={4} mr={4} mb={1} mt={1} ml={4}>
        <Typography>{body}</Typography>
    </Box>
  )
}

export default Message
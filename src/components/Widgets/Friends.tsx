import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import { useGetFriendsQuery } from '../../store/reducers/rtk query/NotificationApi'
import FriendItem from './FriendItem'
import { IUser } from '../../../../frontend/src/models/IUser';

 
const Friends = () => {
  const {user} = useAppSelector(state => state.AuthReducer)
  const {data = [], isLoading, isError} = useGetFriendsQuery(user?.user_id)
  console.log(data)

  if(isLoading){
    return (
      <Box component={'div'} display={'flex'} justifyContent={'start'} alignItems={'start'} flexDirection={'column'} width={'100%'} height={'100%'}>
        <CircularProgress/> 
      </Box>
      )
  }

  if(isError){
    return (
      <Box component={'div'} display={'flex'} justifyContent={'start'} alignItems={'start'} flexDirection={'column'} width={'100%'} height={'100%'}>
        <Typography>Ошибка</Typography> 
      </Box>
      )
  }
  
  if(!data || data.length == 0){
    return (
      <Box component={'div'} display={'flex'} justifyContent={'start'} alignItems={'center'} flexDirection={'column'} width={'100%'} height={'100%'}>
        <Typography sx={{alignSelf: 'center', margin:2}}>Друзья</Typography>
        <Typography sx={{opacity: .8}}>У вас нет Друзей</Typography>
      </Box>
        
      )
  }

  return (
    <Box component={'div'} display={'flex'} justifyContent={'start'} alignItems={'start'} flexDirection={'column'} width={'100%'} height={'100%'}>
      <Typography sx={{alignSelf: 'center', margin:2}}>Друзья</Typography>
       {
          data.map((friend: IUser) => 
              <FriendItem friend={friend}/>
            )
       }
    </Box>
  )
}

export default Friends
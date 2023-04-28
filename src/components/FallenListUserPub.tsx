import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks';
import { IPublic } from '../models/IPublic'
import { IUser } from '../models/IUser'
import {UserSlice} from '../store/reducers/rtk/UserSlice';
import { Box, Button, CircularProgress, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

type Props = {}

const FallenListUserPub = (props: Props) => {
    const {publics, isError, isLoading, isModal, users} = useAppSelector(state => state.UserSlice)
    const dispatch = useAppDispatch()


    if(isLoading){
        return (
        <Box display={'flex'} width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
            <CircularProgress/>
        </Box>
        )
    }

    if(isError){
        return (null)
    }

    if(isModal){
        return (
            <Box component={'div'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} maxHeight={'40%'} overflowX={'scroll'}>
                <IconButton sx={{alignSelf: 'start'}} onClick={()=> dispatch(UserSlice.actions.setIsModal(false))}><Close/></IconButton>
                <Typography>Сообщества</Typography>
                <Box>
                {
                    publics.length != 0 || publics == undefined ? publics?.map((pub: IPublic)=> <Link style={{textDecoration: 'none', fontFamily: '"Roboto","Helvetica","Arial",sans-serif', color: 'black', fontWeight: 'bold'}} to={'/public?id=' +pub?.public_id }>{pub?.title}</Link>) : <Typography sx={{opacity: .8}}>Пусто...</Typography>
                }
                </Box>
                <Typography>Пользователи</Typography>
                <Box>
                {
                    users.length != 0 || users == undefined ? users?.map((user: IUser)=> <Link style={{textDecoration: 'none', fontFamily: '"Roboto","Helvetica","Arial",sans-serif', color: 'black', fontWeight: 'bold'}} to={'/prof/' + user?.user_id}>{user?.username}</Link>) : <Typography sx={{opacity: .8}}>Пусто...</Typography>
                }
                </Box>
                
                
            </Box>
        )
    }

    return null
    
}

export default FallenListUserPub
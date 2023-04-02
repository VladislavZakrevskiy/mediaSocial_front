import React from 'react'
import { Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import FindUserPublic from '../FindUser';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { logout } from '../../store/reducers/rtk async/Auth';
import { ExitToApp } from '@mui/icons-material';

interface IHeader {
  color?: string
}

const Header = ({color}:IHeader) => {
    const dispatch = useAppDispatch()

  return (
    <AppBar position='static'>
        <Toolbar>
        <Typography 
          variant='h3'
          component='h1'
          sx={{flexGrow: 1}}
        >
          MediaSocial
        </Typography>
        <IconButton sx={{color:'inherit'}} onClick={()=>dispatch(logout())}><ExitToApp/></IconButton>
        </Toolbar>
      </AppBar>
  )
}

export default Header
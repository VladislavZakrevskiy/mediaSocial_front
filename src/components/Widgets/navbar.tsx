import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getNumUnwatched } from '../../store/reducers/rtk async/NumUnWatched';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import NavLink from './NavLink';
import FindUserPublic from '../FindUser';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

 
const Navbar = () => {
    const dispatch = useAppDispatch()
    const {num} = useAppSelector(state => state.UserSlice)
    const {user, isLoading} = useAppSelector(state=> state.AuthReducer)
    useEffect(()=> {
        dispatch(getNumUnwatched(user?.user_id))
        // eslint-disable-next-line
    },[user?.user_id])

    if(isLoading) {
        return (
            <></>
        )
    }
    return (
        <Box
            component={'div'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
            
        >
            <Box
                component={'div'}
                display='flex'
                flexDirection={'row'}
                alignItems='center'
                justifyContent='center'
                gap={1}
            >
            <Avatar 
                alt='Photo Of Profile'
                src='https://xsgames.co/randomusers/avatars.php'
                sizes='small'
            />
            <Typography
                variant='h6'
                component='p'
            >
                {user?.first_name} {user?.last_name}
            </Typography>
            <Link to='/nots'>
                <Badge badgeContent={num} color="primary">
                    <MailIcon color="action" />
                </Badge>
            </Link>
            </Box>
            <FindUserPublic/> 
            <NavLink title={'Home page'} to={'/'}/>
            <NavLink title={'Publics'} to={'/publics'}/>
            <NavLink title={'Profile'} to={'/prof/' + user?.user_id}/>
            <NavLink title={'Chat'} to={'/chat'}/>
        </Box>
    )
}
   
export default Navbar
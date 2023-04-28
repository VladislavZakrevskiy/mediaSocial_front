import React from 'react'
import {Link} from 'react-router-dom'
import LoginForm from '../../components/LoginForm'
import Planet from '../../components/Planet'
import { Box, Typography } from '@mui/material';


const Login = () => {
  
  return(
    <Box component={'div'} display={"flex"} >
      <Box component={'div'}  display={'flex'} sx={{ backgroundColor:'black', zIndex: 2, padding: 10, borderRight: '4px solid white'}} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2}> 
        <Box component={'div'} bgcolor='white' padding={5} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2} width='100%' borderRadius={10}>
          <Typography variant='h4'>Вход</Typography>
          <LoginForm mode='login'/>
          <Typography variant='h6'>Нет аккаунта? </Typography> 
          <Link to='/reg' style={{textDecoration: 'none', color: '#1976d2', fontFamily: '"Roboto","Helvetica","Arial",sans-serif'}}>
            Зарегистрируйся!
          </Link> 
        </Box>
      </Box> 
      <Planet/> 
    </Box>
           
    )
}

export default Login
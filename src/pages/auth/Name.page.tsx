import React, {useState, useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import {FullRegSlice} from '../../store/reducers/rtk/FullRegSlice'
import { IName } from '../../models/database/extraInfo';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import Planet from '../../components/Planet'
import { Box, Typography } from '@mui/material';



const Name = () => {
    const [name, setName] = useState<IName>()
    const dispatch = useAppDispatch()
    const user_id = useAppSelector(state => state.AuthReducer.user?.user_id)

    useEffect(() => {
     setName({...name, user_id: user_id} as IName)
    }, [])
    
  
    return (
      <Box component={'div'} display={"flex"} >
      <Box component={'div'}  display={'flex'} sx={{ backgroundColor:'black', zIndex: 2, padding: 10, borderRight: '4px solid white'}} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2}> 
        <Box component={'div'} bgcolor='white' padding={5} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2} width='100%' borderRadius={10}>
          <Typography variant='h4'>Вход</Typography>
          <TextField 
            label='Имя'
            type="text" 
            value={name?.first_name}
            onChange={e => setName({...name, first_name: e.target.value} as IName)}
          />
          <TextField 
            label='Фамилия'
            type="text" 
            value={name?.last_name}
            onChange={e => setName({...name, last_name: e.target.value} as IName)}
          />
          <TextField 
            label='Ник'
            type="text" 
            value={name?.username}
            onChange={e => setName({...name, username: e.target.value} as IName)}
          />
          <Button fullWidth variant='contained' onClick={()=>dispatch(FullRegSlice.actions.setReduxName(name  as IName))}>Save</Button>
          <Link style={{textDecoration: 'none', color: '#1976d2', fontFamily: '"Roboto","Helvetica","Arial",sans-serif'}} to='/contacts'>
            Вперед
          </Link>
        </Box>
      </Box> 
      <Planet/> 
    </Box>
    )
}

export default Name




import React, { useState } from 'react'
import { IContacts } from '../../models/database/extraInfo';
import { useAppDispatch } from '../../hooks/reduxHooks';
import {FullRegSlice} from '../../store/reducers/rtk/FullRegSlice'
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import Planet from '../../components/Planet'
import { Box, Typography } from '@mui/material';

type Props = {}

const Contacts = (props: Props) => {
  const [cont, setCont] = useState<IContacts | undefined>()
  const dispatch = useAppDispatch()

  return (
    <Box component={'div'} display={"flex"} height={'100vh'}>
      <Box component={'div'}  display={'flex'} sx={{ backgroundColor:'black', zIndex: 2, padding: 10, borderRight: '4px solid white'}} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2}> 
        <Box component={'div'} bgcolor='white' padding={5} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2} width='100%' borderRadius={10}>
          <Typography variant='h4'>Вход</Typography>
          <TextField
          size='small'
          label='Город'
          type="text" 
          value={cont?.city}
          onChange={e => setCont({...cont, city: e.target.value} as IContacts)}
        />
        <TextField 
          size='small'
          label='Дом'
          type="text" 
          value={cont?.house}
          onChange={e => setCont({...cont, house: e.target.value} as IContacts)}
        />
        <TextField 
          size='small'
          label='Телефон'
          type="tel" 
          value={cont?.phone}
          onChange={e => setCont({...cont, phone: e.target.value} as IContacts)}
        />
        <TextField 
          size='small'
          label='Другой Телефон'
          type="tel" 
          value={cont?.another_phone}
          onChange={e => setCont({...cont, another_phone: e.target.value} as IContacts)}
        />
        <TextField 
          size='small'
          label='Сайт'
          type="text" 
          value={cont?.site}
          onChange={e => setCont({...cont, site: e.target.value} as IContacts)}
        />
        <TextField 
          size='small'
          label='Скайп'
          type="text" 
          value={cont?.skype}
          onChange={e => setCont({...cont, skype: e.target.value} as IContacts)}
        />
        <Button fullWidth variant='contained' onClick={()=>dispatch(FullRegSlice.actions.setReduxCont(cont as IContacts))}>Save</Button>
        <Link style={{textDecoration: 'none', color: '#1976d2', fontFamily: '"Roboto","Helvetica","Arial",sans-serif'}} to='/intereses'>
          Вперед
        </Link>
        </Box>
      </Box> 
      <Planet/> 
    </Box>
  )
}

export default Contacts




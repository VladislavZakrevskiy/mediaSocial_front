import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IDesc, relationship } from '../../models/database/extraInfo';
import {FullRegSlice} from '../../store/reducers/rtk/FullRegSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import LoginForm from '../../components/LoginForm'
import Planet from '../../components/Planet'
import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material';

type Props = {}

const Desc = () => {
  const [desc, setDesc] = useState<IDesc>()
  const dispatch = useAppDispatch()

  return (
    <Box component={'div'} display={"flex"} >
      <Box component={'div'}  display={'flex'} sx={{ backgroundColor:'black', zIndex: 2, padding: 10, borderRight: '4px solid white'}} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2}> 
        <Box component={'div'} bgcolor='white' padding={5} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2} width='100%' borderRadius={10}>
          <Typography variant='h4'>Вход</Typography>
          <TextField fullWidth
          type="text" 
          value={desc?.desc}
          onChange={e => setDesc({...desc, desc: e.target.value})}
          label={'Описание'}
        /> 
        <TextField fullWidth
          type="date" 
          value={desc?.date_birth}
          onChange={e => setDesc({...desc, date_birth: e.target.value} as IDesc)}
        />
        <Autocomplete fullWidth
        options={relationship}
        renderInput={(params)=><TextField {...params} label={'Семейный статус'}/>}
        />
        <Button fullWidth variant='contained' onClick={()=>dispatch(FullRegSlice.actions.setReduxDesc(desc as IDesc))}>Save</Button>
        <Link to='/name'  style={{textDecoration: 'none', color: '#1976d2', fontFamily: '"Roboto","Helvetica","Arial",sans-serif'}}>
          Вперед
        </Link>
        </Box>
      </Box> 
      <Planet/> 
    </Box>
  )
}

export default Desc




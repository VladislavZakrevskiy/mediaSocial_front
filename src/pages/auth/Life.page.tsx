import React, { useState } from 'react'
import { ILife, politic, main_people, relat, worldview } from '../../models/database/extraInfo';
import {FullRegSlice} from '../../store/reducers/rtk/FullRegSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { saveInfo } from '../../store/reducers/rtk async/FullReg';
import IInfo from '../../models/database/info';
import Planet from '../../components/Planet'
import { Autocomplete, Box, TextField, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Props = {}

const Life = (props: Props) => {
  const [life, setLife] = useState<ILife>()
  const dispatch = useAppDispatch()
  const info: IInfo | undefined = useAppSelector(state => state.FullRegSlice.info)
  const nav = useNavigate()
  const next = () => {
    dispatch(saveInfo(info))
    nav('/')
  }
  return (
    <Box height={"100vh"} component={'div'} display={"flex"} >
      <Box component={'div'}  display={'flex'} sx={{ backgroundColor:'black', zIndex: 2, padding: 10, borderRight: '4px solid white'}} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2}> 
        <Box component={'div'} bgcolor='white' padding={5} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2} width='100%' borderRadius={10}>
          <Typography variant='h4'>Вход</Typography>
        <Autocomplete fullWidth options={politic} renderInput={(params) => 
          <TextField label='Политические убеждения' {...params} value={life?.polit} onChange={(e) => setLife({...life, polit: e.target.value} as ILife)}/>
        }/>
        <Autocomplete fullWidth options={main_people} renderInput={(params) => 
          <TextField label='Главное в людях' {...params} value={life?.main_people} onChange={(e)=>setLife({...life, main_people:e.target.value} as ILife)}/>
        }/>
        <Autocomplete fullWidth options={relat} renderInput={(params) => 
          <TextField label='Отн. к алкоголю' {...params} value={life?.rel_alc} onChange={(e)=>setLife({...life, rel_alc:e.target.value} as ILife)}/>
        }/>
        <Autocomplete fullWidth options={relat} renderInput={(params) => 
          <TextField label='Отн. к курению' {...params} value={life?.rel_smoke} onChange={(e)=>setLife({...life, rel_smoke:e.target.value} as ILife)}/>
        }/>
        <Autocomplete fullWidth options={worldview} renderInput={(params) => 
          <TextField label='Мировозрение' {...params} value={life?.worldview} onChange={(e)=>setLife({...life, worldview:e.target.value} as ILife)}/>
        }/>
        <Button variant='contained' fullWidth onClick={()=>dispatch(FullRegSlice.actions.setReduxLife(life as ILife))}>Сохранить</Button>
        <Button  variant='contained' fullWidth  onClick={next}>Логин</Button>
        </Box>
      </Box> 
      <Planet/> 
    </Box>
  )
}

export default Life



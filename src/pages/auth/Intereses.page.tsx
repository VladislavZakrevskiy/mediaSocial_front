import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IIntereses } from '../../models/database/extraInfo';
import {FullRegSlice} from '../../store/reducers/rtk/FullRegSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { Button, TextField } from '@mui/material';
import Planet from '../../components/Planet'
import { Box, Typography } from '@mui/material';

type Props = {}

const Intereses = (props: Props) => {
  const [intr, setIntr] = useState<IIntereses>()
  const dispatch = useAppDispatch()

  return (
    <Box height={'100vh'} component={'div'} display={"flex"} >
      <Box component={'div'}  display={'flex'} sx={{ backgroundColor:'black', zIndex: 2, padding: 13, borderRight: '4px solid white'}} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2} > 
        <Box flexWrap={'wrap'} width={'100%'}  component={'div'} bgcolor='white' padding={5} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2} borderRadius={10}>
          <Typography variant='h4'>Вход</Typography>
          <Box component={'div'} display={'grid'} gridTemplateColumns={'1fr 1fr'} columnGap={1}>
          <Box component={'div'} display={'flex'} flexDirection={'column'} gap={1}>
            <TextField 
              size='small'
              label='Обо мне'
              type="text"
              value={intr?.about_user}
              onChange={e=>setIntr({...intr, about_user:e.target.value})}
            />
            <TextField 
              size='small'
              label='Активность'
              type="text"
              value={intr?.activity}
              onChange={e=>setIntr({...intr, activity:e.target.value})}
            />
            <TextField 
              size='small'
              label='Любимая книга'
              type="text"
              value={intr?.f_books}
              onChange={e=>setIntr({...intr, f_books:e.target.value})}
            />
            <TextField 
              size='small'
              label='Любимый фильм'
              type="text"
              value={intr?.f_films}
              onChange={e=>setIntr({...intr, f_films:e.target.value})}
            />
          </Box>
          <Box component={'div'} display={'flex'} flexDirection={'column'} gap={1}>
            <TextField 
              size='small'
              label='Любимая игра'
              type="text"
              value={intr?.f_games}
              onChange={e=>setIntr({...intr, f_games:e.target.value})}
            />
            <TextField 
              size='small'
              label='Любимая песня'
              type="text"
              value={intr?.f_music}
              onChange={e=>setIntr({...intr, f_music:e.target.value})}
            />
            <TextField 
              size='small'
              label='Любимая цитата'
              type="text"
              value={intr?.f_quote}
              onChange={e=>setIntr({...intr, f_quote:e.target.value})}
            />
            <TextField 
              size='small'
              label='Любимое шоу'
              type="text"
              value={intr?.f_show}
              onChange={e=>setIntr({...intr, f_show:e.target.value})}
            />
            <TextField 
              size ='small'
              label='Интересы'
              type="text"
              value={intr?.intereses}
              onChange={e=>setIntr({...intr, intereses:e.target.value})}
            />
          </Box>
          </Box>
        <Button fullWidth variant='contained' onClick={()=>dispatch(FullRegSlice.actions.setReduxIntr(intr as IIntereses))}>Save</Button>
        <Link style={{textDecoration: 'none', color: '#1976d2', fontFamily: '"Roboto","Helvetica","Arial",sans-serif'}} to='/life'>
          Вперед
        </Link>
        </Box>
      </Box> 
      <Planet/> 
    </Box>
  )
}

export default Intereses



import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { login, registration } from '../store/reducers/rtk async/Auth';
import { TextField, Button, Box } from '@mui/material';

type typeMode = 'login' | 'registration'

interface IFormProps {
    mode: typeMode
}

const LoginForm = ({mode}: IFormProps) => {
    const nav = useNavigate()
    const {isReg} = useAppSelector(state => state.AuthReducer)
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        dispatch(login({email, password}))
    }

    const handleReg = () => {
        dispatch(registration({email,password}))
            console.log('ok')
            nav('/desc')
    }
    
    return (
      <Box component={'div'} display = {'flex'} flexDirection={"column"} gap={2}>
          <TextField 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              label='email' 
              type="text" 
              
              />
          <TextField 
              value={password} 
              onChange={e => 
              setPassword(e.target.value)} 
              label='password' 
              type="password" />
              {
                mode === 'login' ?
                <Button variant='contained' onClick={handleLogin}>Логин</Button>
                :<Button variant='contained' onClick={handleReg}>Регистрация</Button>
              }
      </Box>
    )
}

export default LoginForm
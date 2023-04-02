import React, { FC, useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Widgets/navbar'
import Home from './pages/home/Home.page'
import Contacts from './pages/auth/Contacts.page'
import Desc from './pages/auth/Desc.page'
import Intereses from './pages/auth/Intereses.page'
import Life from './pages/auth/Life.page'
import Registration from './pages/auth/Registration.page'
import Login from './pages/auth/Login.page';
import Chat from './pages/chat/Chat.page';
import Name from './pages/auth/Name.page';
import ChatById from './pages/chat/ChatById.page'
import Profile from './pages/profile/Profile'
import CreatePublic from './pages/publics/CreatePublic'
import Publics from './pages/publics/Publics'
import PublicById from './pages/publics/PublicById'
import Comments from './pages/home/Comments.page';
import Notification from './pages/notification/Notification.page'
import Friends from './components/Widgets/Friends'
import Header from './components/Widgets/Header'
import './App.css'
import { Grid, Box, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { checkAuth } from './store/reducers/rtk async/Auth'


const App: FC = () => {
  const {isLoading, isAuth} = useAppSelector(state => state.AuthReducer)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    if(localStorage.getItem('token')){
        dispatch(checkAuth())
    }
    // eslint-disable-next-line
}, [])

  if(isLoading){
    return(
        <Box
          component={'div'}
          display='flex'
          justifyContent={'center'}
          alignItems={'center'}
          height={'100vh'}
          width={'100%'}
        >
          <CircularProgress/>
        </Box>
      )
  }
  if(isAuth){
    return (
      <>
        <Header/>
        <Grid container component={'div'} columnSpacing={{xs: 1, sm: 2, md: 3}} margin={3}>
          <BrowserRouter>
            <Grid item xs={4}>
                <Navbar/>
                <Friends/>
            </Grid>
            <Grid item xs={8}>
              <Routes>
                <Route path='/publics' element={<Publics/>}/>
                <Route path='/public' element={<PublicById/>}/>
                <Route path='/comments/:post_id' element={<Comments/>}/>
                <Route index path='/' element={<Home/>}/>
                <Route path='/prof/:user_id' element={<Profile/>}/>
                <Route path='/createPublic' element={<CreatePublic/>}/>
                <Route path='/chat' element={<Chat/>}/>
                <Route path='/chat/:chatId' element={<ChatById/>}/>
                <Route path='*' element={<Home/>}/>
                <Route path='/nots' element={<Notification/>}/>
              </Routes>
            </Grid>
          </BrowserRouter>
        </Grid>
      </>
    )
  }

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/reg' element={<Registration/>}/>
            <Route path='/desc' element={<Desc/>}/>
            <Route path='/name' element={<Name/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/intereses' element={<Intereses/>}/>
            <Route path='/life' element={<Life/>}/>
            <Route index path='*' element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </>
    )
  
}

export default App
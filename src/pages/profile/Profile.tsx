import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Image from '../../components/Images/Image';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { ChatService } from '../../services/ChatService';
import { createChatId } from '../../store/reducers/rtk async/Chat';
import { getUser } from '../../store/reducers/rtk async/FindUser';
import { useAddFriendMutation, useSendNotificationMutation } from '../../store/reducers/rtk query/NotificationApi';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useGetPostsUserQuery } from '../../store/reducers/rtk query/PostsApi';
import PostList from '../../../../frontend/src/components/Posts/PostList';
import { is } from '@react-three/fiber/dist/declarations/src/core/utils';

type Props = {}

const Profile = (props: Props) => {
    const {user_id} = useParams()
    const dispatch = useAppDispatch()
    const {isLoading, isError, data} = useGetPostsUserQuery({id: user_id})
    useEffect(()=>{
        dispatch(getUser(user_id))
    },[])
    const {user, isUserLoading, isUserError} = useAppSelector(state => state.UserSlice)
    const {user: host} = useAppSelector(state => state.AuthReducer)
    
    const [addFriend, {}] = useAddFriendMutation()
    const [sendNotification, {}] = useSendNotificationMutation() 

    const handleAddFriend = () => {
        addFriend({friend_id: user.user_id, user_id: host?.user_id})
        sendNotification({body: 'Вам пришла заявка в друзья' , from_id: user.user_id, to_id: host?.user_id, type: 'Добавление в друзья'})
    }



    if(isUserLoading){
        return (
        <Box display={'flex'} width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
            <CircularProgress/>
        </Box>
        )
    }

    if(isUserError){
        return ( <Box display={'flex'} width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
            <Typography>Ошибка</Typography>
        </Box>)
    }

    return (
        <Box display={'flex'} width={'100%'} height={'100%'} justifyContent={'start'} alignItems={'start'} flexDirection={'column'} gap={2}>
            {
                user.user_id !== host?.user_id ? 
                <div>
                    <Button 
                    onClick={() => dispatch(createChatId({from_id: host?.user_id, to_id: user.user_id}))}>
                    Начать чат
                    </Button>
                    <Button onClick={handleAddFriend}>Добавить в друзья</Button>
                </div>
                : false 
            }
            <Box display={'flex'} flexDirection={'row'} gap={2}>
                <Image id={user.user_id}/>
                <Typography variant='h4'>
                    {user?.first_name} {user?.last_name}
                </Typography>
            </Box>
            <Typography variant='h5'>
                {user?.username}
            </Typography>
            <Typography variant='h6'>
                {user?.email}
            </Typography>
            {
                !isLoading && !isError && data.lenght !== 0 ?
                <PostList posts={data}/> : <Typography>Постов пока нет...</Typography>
            }
        </Box>
    )
}

export default Profile
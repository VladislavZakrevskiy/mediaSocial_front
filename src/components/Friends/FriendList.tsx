import React from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import { useGetFriendsQuery } from '../../store/reducers/rtk query/NotificationApi'
import { IUser } from '../../models/IUser';
import FriendItem from './FriendItem';

type Props = {}

const FriendList = (props: Props) => {
    const {user} = useAppSelector(state => state.AuthReducer)
    const {data, isLoading, isError} = useGetFriendsQuery(user?.user_id)


    if(isLoading){
        return (<h1>Loading...</h1>)
    }
    if(isError){
        return (<h1>Error</h1>)
    }
    return (
        <div>
            {
                data.map((friend: IUser) => <FriendItem friend={friend}/>)
            }
        </div>
    )
}

export default FriendList
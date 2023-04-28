import React from 'react'
import NotificationList from '../../components/Notification/NotificationList';
import { useAppSelector } from '../../hooks/reduxHooks';
import { useGetNotificationQuery } from '../../store/reducers/rtk query/NotificationApi';


const Notification = () => {
    const {user} = useAppSelector(state => state.AuthReducer)
    const API = useGetNotificationQuery(user?.user_id)

    return (
        <div>
            <NotificationList notes={API.data} API={API}/>
        </div>
    )
}

export default Notification
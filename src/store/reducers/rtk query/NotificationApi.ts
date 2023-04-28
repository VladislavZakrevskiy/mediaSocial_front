import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../../http/index';
import { RootState } from '../../store';

interface IBodyAddFr {
    user_id: string | undefined
    friend_id: string
}

type NoteType = 'Добавление в друзья' 

interface IBodySendNote {
    from_id: string
    to_id: string | undefined
    body: string
    type: NoteType
}

export const NotificationApi = createApi({
    reducerPath: 'Notification',
    tagTypes: ['Notification', 'Friend'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL + '/users',
        credentials:'include',
        prepareHeaders: (headers, {endpoint, getState}) => {
            const user = (getState() as RootState).AuthReducer.user
            if (user && endpoint !== 'refresh') {
                headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
            }
            return headers
        }
    }),
    endpoints: (build) => ({
        getFriends: build.query({
            query: (user_id: string = '') => '/getFriends/' + user_id    
        }),

        addFriend: build.mutation({
            query: (body: IBodyAddFr) => ({
                url:'/addFriend',
                method:"POST",
                body
            })
        }),
        
        removeFriend: build.mutation({
            query: (body: IBodyAddFr) => ({
                url:'/removeFriend',
                method:"DELETE",
                body
            })
        }),

        activateFriend: build.mutation({
            query: (body: IBodyAddFr) => ({
                url:'/activate',
                method:"PATCH",
                body
            })
        }),

        getNotification: build.query({
            query: (user_id: string = '') => '/getNotification/' + user_id,
            providesTags: (result) => result
            ? [
                ...result.map(({ id }: any) => ({ type: 'Notification', id })),
                { type: 'Notification', id: 'LIST' },
              ]
            : [{ type: 'Notification', id: 'LIST' }] 
        }),

        sendNotification: build.mutation({
            query: (body: IBodySendNote) => ({
                url: '/sendNotification',
                method: "POST",
                body
            })
        }),

        watchNotification: build.mutation({
            query: (notification_id:string = '') => '/watchNotification/' + notification_id
        }),

        deleteNotification: build.mutation({
            query: (notification_id:string = '') => '/deleteNotification/' + notification_id,
            invalidatesTags: ['Notification']
        }),
    })
})

export const {
    useActivateFriendMutation,  
    useAddFriendMutation,
    useDeleteNotificationMutation,
    useGetFriendsQuery,
    useGetNotificationQuery,
    useRemoveFriendMutation,
    useSendNotificationMutation,
    useWatchNotificationMutation
} = NotificationApi


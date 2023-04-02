import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../../http/index';
import { RootState } from '../../store';

export const ChatApi = createApi({
    reducerPath: 'Chat', 
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
    tagTypes: ['ChatNav', 'Chat'],
    endpoints: (build) => ({
        getChatNav: build.query({
            query: () => '/chatId/' + localStorage.getItem('user_id'),
            providesTags: (result) => result
            ? [
                ...result.map(({ id }: any) => ({ type: 'ChatNav', id })),
                { type: 'ChatNav', id: 'LIST' },
              ]
            : [{ type: 'ChatNav', id: 'LIST' }] 
        }),
        getMessages: build.query({
            query: (chat_id) => '/messages/'+ chat_id,
            providesTags: (result) => result
            ? [
                ...result.map(({ id }: any) => ({ type: 'Chat', id })),
                { type: 'Chat', id: 'LIST' },
              ]
            : [{ type: 'Chat', id: 'LIST' }] 
        })

    }),

})

export const {useGetChatNavQuery, useGetMessagesQuery} = ChatApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../../http/index';
import { RootState } from '../../store';

export const publicApi = createApi({
    reducerPath: 'Public',
    tagTypes:['Public'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL + '/public',
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
        createPublic: build.mutation({
            query: (body) => ({
                url: '/create',
                method: "POST",
                body
            })
        }),
        getPublics: build.query({
            query: ({limit = 5, page = 1}) => `/publics?${limit && `limit=${limit}`}&${page && `page=${page}`}`,
            forceRefetch: ({ currentArg, previousArg }) => {
                return currentArg !== previousArg
            },
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems)
              },
        }),
        getPublic: build.query({
            query: (id) => '/public/' + id
        }), 

        
        getUserPublic: build.query({
            query: (user_id) => '/user/' + user_id,
        })
    })

})

export const {
    useCreatePublicMutation,
    useGetPublicsQuery, 
    useGetPublicQuery,
    useGetUserPublicQuery
    } = publicApi
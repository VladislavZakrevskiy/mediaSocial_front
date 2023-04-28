import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../../http/index';
import { RootState } from '../../store';

interface IPostBodyRequest {
    owner: 'user' | 'public',
    body: string
    id: string | null
}

interface ILikeBodyRequest {
    user_id: string | undefined
    post_id:string
}

interface ICommentBodyRequest {
    body: string 
    user_id: string | undefined
    post_id: string | undefined
}

export const postsApi = createApi({
    reducerPath: 'Posts',
    tagTypes: ['Posts', 'Comment', 'Likes'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL + '/posts',
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
        getPost: build.query({
            query: (post_id: string = '') => 'post/' + post_id
        }),

        getPostsUser: build.query({
            query: ({limit= 50, page= 1, id= ''}) => `/user?${limit && `limit=${limit}`}&${page && `page=${page}`}&${limit && `id=${id}`}`,
            providesTags: (result) => result
            ? [
                ...result.map(({ id }: any) => ({ type: 'Posts', id })),
                { type: 'Posts', id: 'LIST' },
              ]
            : [{ type: 'Posts', id: 'LIST' }] 
            
        }),

        getPostsPublic: build.query({
            query: ({limit= 5, page= 1, id= ''}) => `/public?${limit && `limit=${limit}`}&${page && `page=${page}`}&${id && `id=${id}`}`,
            providesTags: (result) => result
            ? [
                ...result.map(({ id }: any) => ({ type: 'Posts', id })),
                { type: 'Posts', id: 'LIST' },
              ]
            : [{ type: 'Posts', id: 'LIST' }] 
        }),

        getPosts: build.query({
            query: ({limit = 5, page = 1 }) => `/posts?${limit && `limit=${limit}`}&${page && `page=${page}`}`,
            forceRefetch: ({ currentArg, previousArg }) => {
                return currentArg !== previousArg
            },
            merge: (currentCache, newItems) => {
                currentCache.array.push(...newItems.array)
              },
            
        }),

        getLikes: build.query({
            query: ({post_id = '', user_id = ''}) => `/likes?${post_id && `post_id=${post_id}`}&${user_id && `user_id=${user_id}`}`
        }),

        getComments: build.query({
            query: (post_id: string = '') => `/comment/`+post_id,
            providesTags: (result) => result
            ? [
                ...result.map(({ id }: any) => ({ type: 'Comment', id })),
                { type: 'Comment', id: 'LIST' },
              ]
            : [{ type: 'Comment', id: 'LIST' }] 
        }),

        getLastComment: build.query({
            query: (post_id) => `/lastcomment/` + post_id,
        }),

        createPost: build.mutation({
            query: (body: IPostBodyRequest) => ({
                url:`/post`,
                method:"POST",
                body
            }),
            invalidatesTags:['Posts']
        }),
    
        createLikes: build.mutation({
            query: (body: ILikeBodyRequest) => ({
                url:`/likes`,
                method:"POST",
                body
            }),
            invalidatesTags:['Likes']
        }),

        createComment: build.mutation({
            query: (body: ICommentBodyRequest) => ({
                url:`/comment`,
                method:"POST",
                body
            }),
            invalidatesTags:['Comment']
        }),

        
    })
})

export const {
    useCreateCommentMutation,
    useCreateLikesMutation,
    useCreatePostMutation,
    useGetCommentsQuery,
    useGetLikesQuery,
    useGetPostQuery,
    useGetPostsPublicQuery,
    useGetPostsQuery,
    useGetPostsUserQuery,
    useGetLastCommentQuery
} = postsApi


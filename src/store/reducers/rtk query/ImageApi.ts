import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../../http/index';
import { RootState } from '../../store';



export const ImagesApi = createApi({
    reducerPath: 'Image', 
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL + '/images',
        credentials:'include',
        prepareHeaders: (headers, {endpoint, getState}) => {
            const user = (getState() as RootState).AuthReducer.user
            if (user && endpoint !== 'refresh') {
                headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
            }
            return headers
        }
    }),
    tagTypes: ['Image'],
    endpoints: (build) => ({
        getImage: build.query({
            query: (id:string | undefined = '' ) => '/get/' + id
        }),

        uploadImage: build.mutation({
            query: (body: FormData) => ({
                url: '/upload',
                method:"POST",
                body
            })
        }),

        deleteImage: build.mutation({
            query: (body) => ({
                url: '/delete',
                method: "DELETE",
                body
            })
        }),

    })
})

export const {
    useDeleteImageMutation,
    useGetImageQuery,
    useUploadImageMutation
} = ImagesApi
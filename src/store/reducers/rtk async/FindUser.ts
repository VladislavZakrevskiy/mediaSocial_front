import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';

interface IFindUSerPublic {
    name: string
}

export const FindUser = createAsyncThunk(
        'Users/FindUser', 
        async (body: IFindUSerPublic, {rejectWithValue}) => {
            try {
                const response = await $api.post('/users/userPublic', body)
                return response.data
            } catch (e) {
                rejectWithValue(e)
            }
        }
    )

export const getUser = createAsyncThunk(
    'Users/getUser',
    async (user_id: string | undefined, {rejectWithValue}) => {
        try {
            const response = await $api.get('/users/getUser/'+user_id)
            return response.data
        } catch (e) {
            rejectWithValue(e)
            console.log(e)
        }
    }
    )
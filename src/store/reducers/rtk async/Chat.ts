import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import $api from '../../../http';
import { IChatResponse } from '../../../models/IUser';

interface getUsersProps {
    from_id: string | null | undefined
}

export const getUsers = createAsyncThunk(
    'Chat/getUsers',
    async (_, {rejectWithValue, fulfillWithValue}) => {
        try {
            const response = await $api.get<IChatResponse[] | null>("/users/chatId/"+localStorage.getItem('user_id'))
            return response.data
        } catch (e) {
            rejectWithValue(e)
        }
    }
)

interface IBodyCreateChatId {
    from_id : string | undefined
    to_id: string  | undefined
}
export const createChatId = createAsyncThunk(
    'Chat/CreateChatID',
    async (body: IBodyCreateChatId, {rejectWithValue}) => {
        try {
            const response = await $api.post('/chat/createChatId', body)
            return response.data
        } catch (e) {
            console.log(e)
            rejectWithValue(e)
        }
    }
    )
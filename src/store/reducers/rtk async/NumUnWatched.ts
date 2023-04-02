import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';

export const getNumUnwatched = createAsyncThunk(
        'Users/numUnWatched',
        async (user_id: string | undefined = '', {rejectWithValue}) =>  {
            try {
                const num = await $api.get('/users/numUnWatched/' + user_id)
                return num.data
            } catch (e) {
                rejectWithValue(e)
                console.log(e)
            }
        }
    )
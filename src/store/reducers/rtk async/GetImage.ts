import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../../http';

export const getImages = createAsyncThunk(
        'Image/get',
        async (id: string, {rejectWithValue}) => {
            try {
                const response = await $api.get('/images/get/' + id, {
                        headers: {
                            "Content-Type": 'application/json',
                        },
                        responseType:'blob'
                    })
                return response.data
            } catch (e) {
                console.log(e)
                rejectWithValue(e)
            }
        }
    )
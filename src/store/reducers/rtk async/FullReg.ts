import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../../http';
import IInfo from '../../../models/database/info';
import { RootState } from '../../store';
import FullRegSlice from '../rtk/FullRegSlice';

export interface FullRegResponse {

}

export const saveInfo = createAsyncThunk(
        'fullReg/saveInfo',
        async (info: IInfo | undefined, {getState, rejectWithValue}) => {
            try {
                const response = await axios.patch(API_URL + '/auth/saveInfo', info)
                return response
            } catch (e: any) {
                console.log(e)
                rejectWithValue(e.response?.data)
            }
        }
    )
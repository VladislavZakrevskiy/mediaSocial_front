import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import $api, { API_URL } from '../../../http';
import IAuthResponse from '../../../models/response/AuthResponse';
import { AuthService } from '../../../services/AuthService';
import { FullRegResponse } from '../../../../../frontend/src/store/reducers/rtk async/FullReg';

interface authData {
    email: string
    password: string
}

export const login = createAsyncThunk(
        'Auth/login',
        async (arg: authData, thunkAPI) => {
            try {
                const response = await AuthService.login(arg.email, arg.password)
                return response.data
            } catch (e: any) {
                console.log(e)
                return thunkAPI.rejectWithValue(e.response?.data?.message)            }
        }
    )

export const registration = createAsyncThunk(
        'Auth/registration',
        async (arg: authData, thunkAPI) => {
            try {
                const response = await AuthService.registration(arg.email, arg.password)
                return response.data
            } catch (e: any) {
                console.log(e)
                return thunkAPI.rejectWithValue(e.response?.data?.message)
            }
        }
    )

export const logout = createAsyncThunk(
        'Auth/logout',
        async (_, thunkAPI) => {
            try {
                const response = await AuthService.logout()
                return response
            } catch (e: any) {
                console.log(e)
                return thunkAPI.rejectWithValue(e.response?.data?.message)
            }
        }
    )

    export const checkAuth = createAsyncThunk(
        'Auth/checkAuth',
        async (_, {rejectWithValue, fulfillWithValue}) => {
            try {
                const response = await axios.get<IAuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})
                console.log(response)
                return fulfillWithValue(response.data)
            } catch (e) {
                console.log(e) 
                return rejectWithValue(e.response?.data?.message)
                  
            }
        }
    )
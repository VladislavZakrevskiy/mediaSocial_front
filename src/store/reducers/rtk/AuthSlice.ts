import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import IAuthResponse from '../../../models/response/AuthResponse';
import { login, logout, registration, checkAuth } from '../rtk async/Auth';

export interface IAuthState {
    user: IUser | null
    isAuth: boolean
    isLoading: boolean
    isReg: boolean
}

const initialState: IAuthState = {
    user: null,
    isAuth: false,
    isLoading: false,
    isReg: false
}

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        }
    },
    extraReducers:{
        [login.fulfilled.type]: (state, action: PayloadAction<IAuthResponse>) => {
            localStorage.setItem('user_id', action.payload.user.user_id) 
            localStorage.setItem('token', action.payload.accessToken)
            state.isAuth = true
            state.isReg = false
            state.user = action.payload.user
        },
        [registration.fulfilled.type]: (state, action: PayloadAction<IAuthResponse>) => {
            localStorage.setItem('token', action.payload.accessToken)
            state.isReg = true
            state.user = action.payload.user
        },
        [logout.fulfilled.type]: (state) => {
            localStorage.removeItem('token')
            state.isAuth = false
            state.isReg = false
            state.user = null
        },
        [checkAuth.pending.type]: (state) => {
            state.isLoading = true
        },
        [checkAuth.fulfilled.type]: (state, action: PayloadAction<IAuthResponse>) => {
            console.log('ful refresh')
            console.log(action.payload)
            localStorage.setItem('token', action.payload.accessToken)
            state.isAuth = true
            state.user = action.payload.user
            state.isLoading = false
        },
        [checkAuth.rejected.type]: (state) => {
            console.log('rej refresh')
            state.isLoading = false
            state.isAuth = false
        },
    },
})

export default AuthSlice.reducer
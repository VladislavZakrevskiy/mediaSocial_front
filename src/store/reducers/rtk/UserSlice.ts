import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPublic } from '../../../models/IPublic';
import { IUser } from '../../../models/IUser';
import { FindUser, getUser } from '../rtk async/FindUser';
import { getNumUnwatched } from '../rtk async/NumUnWatched';

interface IResponse {
    users: IUser[]
    publics: IPublic[]
}

interface StateFindUser {
    isLoading: boolean
    isError: boolean
    isModal: boolean
}

interface StateGetUser {
    isUserLoading: boolean
    isUserError: boolean
    user: IUser
}

interface StateGetNumUW {
    isUWLoading: boolean
    isUWError: boolean
    num: number | string
}

interface IUserSliceProps extends IResponse, StateFindUser, StateGetUser, StateGetNumUW {}

const initialState: IUserSliceProps = {
    isLoading: false, 
    isError: false, 
    isModal: false,
    publics: [], 
    users: [],
    isUserError: false,
    isUserLoading:false,
    user: {} as IUser,
    isUWError: false,
    isUWLoading: false, 
    num: ''
}

export const UserSlice = createSlice({
    name:'Users', 
    initialState,
    reducers: {
        setIsModal(state, action){
            state.isModal = action.payload
        }
    },
    extraReducers: {

        [FindUser.pending.type]: (state) =>  {
            state.isModal = false
            state.isLoading = true
            state.isError = false
        },

        [FindUser.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.isModal = true
            state.isError = false
            state.users = action.payload.users
            state.publics = action.payload.publics  
            console.log('done')          
        },

        [FindUser.rejected.type]: (state) =>  {
            state.isModal = false
            state.isLoading = false
            state.isError = true
        },

        [getUser.fulfilled.type]: (state, action) =>  {
            state.isUserLoading = false
            state.isUserError = false
            state.user = action.payload
        }, 
        
        [getUser.rejected.type]: (state) =>  {
            state.isUserError = true
            state.isUserLoading = false
        },

        [getUser.pending.type]: (state) =>  {
            state.isUserLoading = true
        },

        [getNumUnwatched.pending.type]: (state) =>  {
            state.isUWLoading = true
            state.isUWError = false

        },

        [getNumUnwatched.fulfilled.type]: (state, action) =>  {
            state.isUWLoading = false
            state.isUWError = false
            state.num = action.payload
        },

        [getNumUnwatched.rejected.type]: (state) =>  {
            state.isUWLoading = false
            state.isUWError = true
            state.num = ''
        },
    }
})

export default UserSlice.reducer
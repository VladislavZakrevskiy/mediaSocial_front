import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUsers, createChatId } from '../rtk async/Chat';
import { IChatResponse } from '../../../models/IUser';



export interface IChatState {
    users: IChatResponse[] 
    isLoading: boolean
    isCreateLoading: boolean
    isCreateError: boolean

}

const initialState: IChatState = {
    users: [],
    isLoading: false,
    isCreateLoading: false, 
    isCreateError: false

}

export const ChatSlice = createSlice({
    name:"Chat",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getUsers.pending.type]:(state)=>{
            state.isLoading = true
        },
        [getUsers.fulfilled.type]: (state, action: PayloadAction<IChatResponse[]>) => {
            state.users = action.payload
            state.isLoading = false

        },
        [getUsers.rejected.type]: (state, action) => {
            state.isLoading = false
        },

        [createChatId.fulfilled.type]: (state, action) => {
            state.isCreateLoading = false
            state.isCreateError = false
        },

        [createChatId.rejected.type]: (state, action) => {
            state.isCreateLoading = false
            state.isCreateError = true
        },

        [createChatId.pending.type]: (state, action) => {
            state.isCreateLoading = true
            state.isCreateError = false
        },
    }
})

export default ChatSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPublic } from '../../../models/IPublic';
import { IUser } from '../../../models/IUser';
import { FindUser, getUser } from '../rtk async/FindUser';
import { getImages } from '../rtk async/GetImage';
import { getNumUnwatched } from '../rtk async/NumUnWatched';


interface IImagesSliceProps  {
    isLoading: boolean
    isError: boolean
    data: any 
}

const initialState: IImagesSliceProps = {
    isLoading: false,
    isError: false,
    data: {}
}

export const ImagesSlice = createSlice({
    name:'Images', 
    initialState,
    reducers: {

    },
    extraReducers: {
        [getImages.pending.type]: (state) => {
            state.isLoading = true
            state.isError = false
            state.data = {}
        },

        [getImages.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.isError = false
            state.data = action.payload
        },

        [getImages.rejected.type]: (state) => {
            state.isLoading = false
            state.isError = true
            state.data = {}
        },
    }
})

export default ImagesSlice.reducer
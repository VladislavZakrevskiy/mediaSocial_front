import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDesc, IContacts, IIntereses, ILife, IName } from '../../../models/database/extraInfo';
import IInfo from '../../../models/database/info';
import { FullRegResponse, saveInfo } from '../rtk async/FullReg';

export interface IRegState {
    info: IInfo | undefined
    isSuccess: boolean
    isLoading: boolean
}

const initialState: IRegState = {
    info: {
        desc: null,
        cont: null,
        intr: null,
        life: null,
        name: null
    },
    isSuccess: false,
    isLoading: false
}

export const FullRegSlice = createSlice({
    name: 'fullReg',
    initialState,
    reducers: {
        setReduxDesc: (state, action: PayloadAction<IDesc>)=> {
            state.info!.desc = action.payload
        },
        setReduxCont: (state, action: PayloadAction<IContacts>)=> {
            state.info!.cont = action.payload
        },
        setReduxLife: (state, action: PayloadAction<ILife>)=> {
            state.info!.life = action.payload
        },
        setReduxIntr: (state, action: PayloadAction<IIntereses>)=> {
            state.info!.intr = action.payload
        },
        setReduxName: (state, action: PayloadAction<IName>) => {
            state.info!.name = action.payload
        }
    },
    extraReducers:{
        [saveInfo.pending.type]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [saveInfo.fulfilled.type]: (state) => {
            state.isLoading = true
            state.isSuccess = true
        },
        [saveInfo.rejected.type]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },

    }
})

export default FullRegSlice.reducer
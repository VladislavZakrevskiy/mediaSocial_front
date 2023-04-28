import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from './reducers/rtk/AuthSlice';
import FullRegSlice from './reducers/rtk/FullRegSlice';
import ChatSlice from './reducers/rtk/ChatSlice';
import { ChatApi } from './reducers/rtk query/ChatApi';
import { publicApi } from "./reducers/rtk query/PublicApi";
import { postsApi } from "./reducers/rtk query/PostsApi";
import UserSlice from './reducers/rtk/UserSlice';
import { NotificationApi } from './reducers/rtk query/NotificationApi';
import { ImagesApi } from './reducers/rtk query/ImageApi';
import ImagesSlice from './reducers/rtk/ImageSlice';




const rootReducer = combineReducers({
    AuthReducer,
    FullRegSlice,
    ChatSlice,
    UserSlice,
    ImagesSlice,
    [ChatApi.reducerPath]: ChatApi.reducer,
    [publicApi.reducerPath]: publicApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [NotificationApi.reducerPath]: NotificationApi.reducer,
    [ImagesApi.reducerPath]: ImagesApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([ChatApi.middleware, publicApi.middleware, postsApi.middleware, NotificationApi.middleware, ImagesApi.middleware])
        ,
    })
}

export type RootState = ReturnType<typeof rootReducer>

export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']
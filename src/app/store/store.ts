import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "app/store/ducks/auth/signinSlice";
import { homeReducer } from "app/store/ducks/home/homeSlice";
import { directReducer } from "app/store/ducks/direct/DirectSlice";


export const store = configureStore({
    reducer: {
        direct:directReducer,
        auth: authReducer,
        home: homeReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { currentPost } from "./features/currentPost";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { currentUser } from "./features/currentUser";
import { user } from "./features/user";
import { posts } from "./features/posts";
import { users } from "./features/users";

const store = configureStore({
    reducer: {
        currentPost: currentPost.reducer,
        // user details page 
        currentUser: currentUser.reducer,
        // currently logged in user
        user: user.reducer,
        // posts in the app
        posts: posts.reducer,
        // all users in the app
        users: users.reducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<R> = ThunkAction<R, RootState, unknown, Action<any>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
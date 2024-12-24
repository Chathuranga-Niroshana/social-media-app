import { configureStore } from "@reduxjs/toolkit";
import { currentPost } from "./features/currentPost";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { currentUser } from "./features/currentUser";

const store = configureStore({
    reducer: {
        currentPost: currentPost.reducer,
        currentUser: currentUser.reducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
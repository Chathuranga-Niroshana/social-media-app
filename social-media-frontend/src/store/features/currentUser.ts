import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../model/user";

type CurrentUserInitialState = User;
const initialState: CurrentUserInitialState = {
    id: '',
    name: '',
    email: '',
    username: '',
    bio: ''
}

export const currentUser = createSlice({
    name: 'currentUser',
    initialState: initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return action.payload;
        }
    }
})

export const CurrentUserActions = currentUser.actions;
export default currentUser.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../model/user"


type UsersInitialState = {
    [key: string]: User;
}

const initialState: UsersInitialState = {}

export const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, action: PayloadAction<User[]>) => {
            action.payload.map((user) => {
                state[user.id] = user
            })
        }
    }
});

export const UserActions = users.actions;
export default users.reducer;
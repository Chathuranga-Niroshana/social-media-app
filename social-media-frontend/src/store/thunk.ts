import { User } from "../model/user";
import { AppThunk } from "./index";

type createUserAccountThunkProps = {
    email: string;
    password: string;
    name: string;
    onSuccess: () => void;
    onError: () => void;
}

export const createUserAccountThunk = (
    props: createUserAccountThunkProps
): AppThunk<void> => {

    const { email, password, name, onSuccess, onError } = props;

    return async (dispatch, state) => {
        try {
            const newUser = Object.assign({}, state().user);
            // newUser.id
        } catch (error) {
            console.log(error)
        }
    }
}
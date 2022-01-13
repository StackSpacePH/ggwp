import * as api from '../api/api.js';
import { register } from "../reducers/page.js";

export const fetchUser = (userslug) => async (dispatch) => {
    try {
        const { data } = await api.fetchUser(userslug);

        dispatch(register(data));
    } catch (error) {
        console.log(error.message)
    }
};
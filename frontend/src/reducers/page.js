import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState: {
        value: {
            username: "",
            usertag: "",
            userslug: "",
            bio: "",
            current_playing: ""
        }
    },
    reducers: {
        register: (state, actions) => {
            state.value = actions.payload;
        }
    }
});

export const { register } = pageSlice.actions;

export default pageSlice.reducer;
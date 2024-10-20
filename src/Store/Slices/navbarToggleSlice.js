import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showNotification: false,
    showProfile: false
}

const navbarToggleSlice = createSlice({
    name: "navbar",
    initialState: initialState,
    reducers: {
        toggleNotification: (state) => {
            state.showNotification = !state.showNotification;
            state.showProfile = false;
        },
        toggleProfile: (state) => {
            state.showProfile = !state.showProfile;
            state.showNotification = false;
        }
    }
})

export const { toggleNotification, toggleProfile } = navbarToggleSlice.actions;
export default navbarToggleSlice.reducer;

export const navbarData = (state) => state.navbar;

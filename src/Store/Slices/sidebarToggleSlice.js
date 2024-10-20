import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSidebar: false,
    showSidebarContent: false,
    sidebarList: []
}

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.showSidebar = !state.showSidebar;
        },
        toggleSidebarContent: (state, action) => {
            state.showSidebarContent = action.payload;
        },
        setSidebarContent: (state, action) => {
            state.sidebarList = action.payload;
        }
    }
})

export const { toggleSidebar, toggleSidebarContent, setSidebarContent } = sidebarSlice.actions;
export default sidebarSlice.reducer;

export const sidebarData = (state) => state.sidebar;

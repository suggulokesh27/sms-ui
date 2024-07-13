import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideBar : true,
    contentSideBar : false,
    items : []
}

const SidebarToggleSlice = createSlice({
    name : "sideBar",
    initialState,
    reducers : {
        toggleSideBar : (state,action) => {
            state.sideBar = action.payload;
        },
        toggleContentSideBar : (state,action) => {
            state.contentSideBar = action.payload;
        },
        setContentSideItems : (state,action) => {
            state.items = action.payload;
        }
    }
})

export const { toggleSideBar,toggleContentSideBar,setContentSideItems } = SidebarToggleSlice.actions;

export default SidebarToggleSlice.reducer;
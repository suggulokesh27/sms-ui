import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    token : "",
    status : ""
}

const LoginSlice = createSlice(
    {
        name : "login",
        initialState,
        reducers : {
            setToken : (state,action) => {
                state.token = action.payload;
            },
            setStatus : (state,action) => {
                state.status = action.payload;
            }
        }
    
    }
) ;

export const {setToken,setStatus} = LoginSlice.actions;
export default LoginSlice.reducer;
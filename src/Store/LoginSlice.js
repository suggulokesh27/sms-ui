import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    token : "",
    usertype : ""
}

const LoginSlice = createSlice(
    {
        name : "login",
        initialState,
        reducers : {
            setToken : (state,action) => {
                state.token = action.payload;
            },
            setUserType : (state,action) => {
                state.usertype = action.payload;
            }
        }
    
    }
) ;

export const {setToken,setUserType} = LoginSlice.actions;
export default LoginSlice.reducer;
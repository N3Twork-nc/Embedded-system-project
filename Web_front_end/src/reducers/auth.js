import {createSlice} from "@reduxjs/toolkit"

const authReducer=createSlice({
    name:"Auth",
    initialState:localStorage.getItem('Authentication'),
    reducers: {
        loginSuccess: (state,action) => {
            localStorage.setItem('Authentication',JSON.stringify({"token":action.payload,"isLoggedIn":true}));
            return localStorage.getItem('Authentication')
        },
        loginFailure: (state) => {
            localStorage.setItem('Authentication',null);
            return localStorage.getItem('Authentication')
        }
    }
})

export const {actions,reducer}= authReducer
export const { loginSuccess,loginFailure}=actions
export default reducer
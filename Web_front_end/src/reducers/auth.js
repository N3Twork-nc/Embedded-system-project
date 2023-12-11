import {createSlice} from "@reduxjs/toolkit"

const authReducer=createSlice({
    name:"Auth",
    initialState:{
        "isLoggedIn":localStorage.getItem('isLoggedIn'),
        "token":"",
    },
    reducers: {
        loginSuccess: (state,data) => {
            state.isLoggedIn = true;
            localStorage.setItem('isLoggedIn',true)
            state.token=data;
        },
        loginFailure: (state) => {
            state.isLoggedIn=false
            state.token=null
        }
    }
})

export const {actions,reducer}= authReducer
export const { loginSuccess,loginFailure}=actions
export default reducer
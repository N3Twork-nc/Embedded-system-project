import {createSlice} from "@reduxjs/toolkit"

TokenReducer=createSlice({
    name:"token",
    initialState:"",
    reducers:{
        updateToken(state,data){
            return data
        }
    }
})

export const {actions,reducer} =TokenReducer
export const {updateToken}=actions
export default reducer
import {createSlice} from "@reduxjs/toolkit"

const infoUser=createSlice({
    name:"infoUser",
    initialState:localStorage.getItem("infoUser"),
    reducers:{
        updateInfoUser(state,data){
            state=data.payload
            localStorage.setItem("infoUser",data.payload)
            return state
        },

        deleteInfoUser(state, action) {
            state.username = "";
            state.password = "";
            state.email = "";
            state.fullname = "";
            state.gender = "";
            state.phoneNumber = "";
            state.address = "";
            
        },
    }
})

export const {actions,reducer} =infoUser
export const {updateInfoUser, deleteInfoUser}=actions
export default reducer
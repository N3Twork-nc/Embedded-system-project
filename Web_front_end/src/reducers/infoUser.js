import {createSlice} from "@reduxjs/toolkit"

const infoUser=createSlice({
    name:"infoUser",
    initialState:localStorage.getItem("infoUser"),
    reducers:{
        updateInfoUser(state,action){
            localStorage.setItem("infoUser",JSON.stringify(action.payload))
            return localStorage.getItem("infoUser")
        },

        deleteInfoUser(state) {
            localStorage.setItem("infoUser",null)
            return localStorage.getItem("infoUser")
        },
    }
})

export const {actions,reducer} =infoUser
export const {updateInfoUser, deleteInfoUser}=actions
export default reducer
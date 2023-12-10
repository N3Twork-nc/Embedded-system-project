import {createSlice} from "@reduxjs/toolkit"

infoUser=createSlice({
    name:"infoUser",
    initialState:{
        "username":"",
        "password":"",
        "email":"",
        "fullname":"",
        "gender": "",
        "phoneNumber": "",
        "address": ""
    },
    reducers:{
        updateAll(state,data){
            state=data.payload
            return state
        },

        deleteAll(state, action) {
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
export const {updateAll, deleteAll}=actions
export default reducer
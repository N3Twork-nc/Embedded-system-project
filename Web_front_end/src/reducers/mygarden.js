import {createSlice} from "@reduxjs/toolkit"

const gardenReducer=createSlice({
    name:"Garden",
    initialState:{'payload':[]},
    reducers:{
        updateMyGarden(state,data){
            return data
        }
    }
})

export const {actions,reducer} =gardenReducer
export const {updateMyGarden}=actions
export default reducer
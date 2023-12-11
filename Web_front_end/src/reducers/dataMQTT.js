import {createSlice} from "@reduxjs/toolkit"

const dataMQTT=createSlice({
    name:"infoUser",
    initialState:{
        temperature: 0,
        humidity: 0,
        light: 0,
        moisture:0,
        led:false
    },
    reducers:{
        updateTemperature(state,action){
           return {...state,temperature:action.payload}
        },
        updateHumidity(state,action){
            return {...state,humidity:action.payload}
        },
        updateLight(state,action){
            return {...state,light:action.payload}
        },
        updateMoisture(state,action){
            return {...state,moisture:action.payload}
        },
        updateLed(state,action){
            return {...state,led:action.payload}
        },
    }
})

export const {actions,reducer} =dataMQTT
export const {updateTemperature, updateHumidity,updateLight,updateMoisture,updateLed}=actions
export default reducer
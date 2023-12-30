import { configureStore} from "@reduxjs/toolkit"
import infoUserReducer from "../reducers/infoUser"
import authReducer from "../reducers/auth"
import gardenReducer from "../reducers/mygarden"
import dataMQTT from "../reducers/dataMQTT"
const rootReducer={
    infoUser: infoUserReducer,
    garden:gardenReducer,
    auth:authReducer,
    dataMQTT:dataMQTT
}

const store=configureStore({
    reducer:rootReducer,
})

export default store
import { configureStore} from "@reduxjs/toolkit"
import infoUserReducer from "../reducers/infoUser"
import authReducer from "../reducers/auth"
import gardenReducer from "../reducers/mygarden"
const rootReducer={
    infoUser: infoUserReducer,
    garden:gardenReducer,
    auth:authReducer,
}

const store=configureStore({
    reducer:rootReducer,
})

export default store
import { configureStore} from "@reduxjs/toolkit"
import infoUserReducer from "../reducers/infoUser"
import tokenReducer from "../reducers/token"
import gardenReducer from "../reducers/mygarden"

const rootReducer={
    infoUser: infoUserReducer,
    token: tokenReducer,
    garden:gardenReducer
}

const store=configureStore({
    reducer:rootReducer
})

export default store
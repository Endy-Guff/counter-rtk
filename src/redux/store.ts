import {firstCounterReducer} from "./firstCounterReducer";
import {combineReducers, createStore} from "redux";
import {secondCounterReducer} from "./secondCounterReducer";

export type RootStoreType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    firstCounter: firstCounterReducer,
    secondCounter: secondCounterReducer
})

export const store = createStore(rootReducer)

//@ts-ignore
window.store = store
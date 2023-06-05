import {counterReducer} from "./counterReducer";
import {combineReducers, createStore, legacy_createStore} from "redux";
import {loadState, saveState} from "../utils/localStorageUtils";

export type RootStoreType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(()=>{
    saveState(store.getState())
})

//@ts-ignore
window.store = store
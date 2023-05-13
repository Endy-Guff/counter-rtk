import {counterReducer} from "./counterReducer";
import {createStore} from "redux";

export type RootStoreType = ReturnType<typeof counterReducer>

export const store = createStore(counterReducer)

//@ts-ignore
window.store = store
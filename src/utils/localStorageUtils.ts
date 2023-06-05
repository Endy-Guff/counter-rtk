import {RootStoreType} from "../redux/store";

export const loadState = () => {
    const state = localStorage.getItem('state')
    if (!state){
        return undefined
    }
    return JSON.parse(state)
}

export const saveState = (state: RootStoreType) => {
    localStorage.setItem('state', JSON.stringify(state))
}
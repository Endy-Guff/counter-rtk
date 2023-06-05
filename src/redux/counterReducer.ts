const INC_ADD = 'INC-ADD'
const INC_RESET = 'INC-RESET'
const SET_MIN_MAX = 'SET-MIN-MAX'
const CHANGE_MIN = 'CHANGE-MIN'
const CHANGE_MAX = 'CHANGE-MAX'
const SET_MESSAGE = 'SET-MESSAGE'

export type IncType = {
    inc: number
    min: number
    max: number
}
export type MinMaxType = {
    min: number
    max: number
}
type DataType = {
    inc: IncType
    minMax: MinMaxType
}
export type MessageType = 'press "set"' | 'error' | ''
type InitialStateType = {
    data: DataType
    message: MessageType
}

type IncAddActionCreateType = {
    type: 'INC-ADD'
}
type IncResetActionCreateType = {
    type: 'INC-RESET'
}
type SetMinMaxActionCreateType = {
    type: 'SET-MIN-MAX'
}
type ChangeMinActionCreateType = {
    type: 'CHANGE-MIN'
    min: number
}
type ChangeMaxActionCreateType = {
    type: 'CHANGE-MAX'
    max: number
}
type ChangeSetMessageActionCreateType = {
    type: 'SET-MESSAGE'
    message: MessageType
}
const initialState: InitialStateType = {
    data: {
        inc: {inc: 0, min: 0, max: 5},
        minMax: {min:0, max: 5}
    },
    message: 'press "set"',
}

type ActionType = IncAddActionCreateType | IncResetActionCreateType | ChangeSetMessageActionCreateType
    | SetMinMaxActionCreateType | ChangeMinActionCreateType | ChangeMaxActionCreateType

export const counterReducer = (state = initialState, action:ActionType): InitialStateType => {
    switch (action.type) {
        case INC_ADD:
            return {...state, data: {...state.data, inc: {...state.data.inc, inc: state.data.inc.inc + 1}}}
        case INC_RESET:
            return {...state, data: {...state.data, inc: {...state.data.inc, inc: state.data.inc.min}}}
        case SET_MIN_MAX:
            return {...state, data: {...state.data, inc: {...state.data.inc, inc: state.data.minMax.min, min: state.data.minMax.min, max: state.data.minMax.max}}}
        case CHANGE_MIN:
            if (action.min === state.data.minMax.max || action.min < 0 || state.data.minMax.max < 0 || action.min > state.data.minMax.max){
                return {...state, message: 'error', data: {...state.data, minMax: {...state.data.minMax, min: action.min}}}
            }else {
                return {...state, message: 'press "set"', data: {...state.data, minMax: {...state.data.minMax, min: action.min}}}
            }
        case CHANGE_MAX:
            if (state.data.minMax.min === action.max || state.data.minMax.min < 0 || action.max < 0 || state.data.minMax.min > action.max){
                return {...state, message: 'error', data: {...state.data, minMax: {...state.data.minMax, max: action.max}}}
            }else {
                return {...state, message: 'press "set"', data: {...state.data, minMax: {...state.data.minMax, max: action.max}}}
            }
        case SET_MESSAGE:
            return {...state, message: action.message}
        default:
            return state
    }
}

export const incAddAC = (): IncAddActionCreateType =>{
    return{
        type: INC_ADD
    }
}

export const incResetAC = (): IncResetActionCreateType =>{
    return{
        type: INC_RESET
    }
}

export const setMinMaxAC = (): SetMinMaxActionCreateType =>{
    return{
        type: SET_MIN_MAX
    }
}

export const changeMinAC = (num: number): ChangeMinActionCreateType =>{
    return{
        type: CHANGE_MIN,
        min: num
    }
}

export const changeMaxAC = (num: number): ChangeMaxActionCreateType =>{
    return{
        type: CHANGE_MAX,
        max: num
    }
}

export const setMessageAC = (message: MessageType): ChangeSetMessageActionCreateType =>{
    return{
        type: SET_MESSAGE,
        message
    }
}
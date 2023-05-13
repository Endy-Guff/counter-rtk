const FIRST_INC_ADD = 'FIRST-INC-ADD'
const FIRST_INC_RESET = 'FIRST-INC-RESET'
const FIRST_SET_MIN_MAX = 'FIRST-SET-MIN-MAX'
const FIRST_CHANGE_MIN = 'FIRST-CHANGE-MIN'
const FIRST_CHANGE_MAX = 'FIRST-CHANGE-MAX'
const FIRST_SET_MESSAGE = 'FIRST-SET-MESSAGE'

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
    type: 'FIRST-INC-ADD'
}
type IncResetActionCreateType = {
    type: 'FIRST-INC-RESET'
}
type SetMinMaxActionCreateType = {
    type: 'FIRST-SET-MIN-MAX'
}
type ChangeMinActionCreateType = {
    type: 'FIRST-CHANGE-MIN'
    min: number
}
type ChangeMaxActionCreateType = {
    type: 'FIRST-CHANGE-MAX'
    max: number
}
type ChangeSetMessageActionCreateType = {
    type: 'FIRST-SET-MESSAGE'
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

export const firstCounterReducer = (state = initialState, action:ActionType): InitialStateType => {
    switch (action.type) {
        case FIRST_INC_ADD:
            return {...state, data: {...state.data, inc: {...state.data.inc, inc: state.data.inc.inc + 1}}}
        case FIRST_INC_RESET:
            return {...state, data: {...state.data, inc: {...state.data.inc, inc: state.data.inc.min}}}
        case FIRST_SET_MIN_MAX:
            return {...state, data: {...state.data, inc: {...state.data.inc, inc: state.data.minMax.min, min: state.data.minMax.min, max: state.data.minMax.max}}}
        case FIRST_CHANGE_MIN:
            if (action.min === state.data.minMax.max || action.min < 0 || state.data.minMax.max < 0 || action.min > state.data.minMax.max){
                return {...state, message: 'error', data: {...state.data, minMax: {...state.data.minMax, min: action.min}}}
            }else {
                return {...state, message: 'press "set"', data: {...state.data, minMax: {...state.data.minMax, min: action.min}}}
            }
        case FIRST_CHANGE_MAX:
            if (state.data.minMax.min === action.max || state.data.minMax.min < 0 || action.max < 0 || state.data.minMax.min > action.max){
                return {...state, message: 'error', data: {...state.data, minMax: {...state.data.minMax, max: action.max}}}
            }else {
                return {...state, message: 'press "set"', data: {...state.data, minMax: {...state.data.minMax, max: action.max}}}
            }
        case FIRST_SET_MESSAGE:
            return {...state, message: action.message}
        default:
            return state
    }
}

export const firstIncAddAC = (): IncAddActionCreateType =>{
    return{
        type: FIRST_INC_ADD
    }
}

export const firstIncResetAC = (): IncResetActionCreateType =>{
    return{
        type: FIRST_INC_RESET
    }
}

export const firstSetMinMaxAC = (): SetMinMaxActionCreateType =>{
    return{
        type: FIRST_SET_MIN_MAX
    }
}

export const firstChangeMinAC = (num: number): ChangeMinActionCreateType =>{
    return{
        type: FIRST_CHANGE_MIN,
        min: num
    }
}

export const firstChangeMaxAC = (num: number): ChangeMaxActionCreateType =>{
    return{
        type: FIRST_CHANGE_MAX,
        max: num
    }
}

export const firstSetMessageAC = (message: MessageType): ChangeSetMessageActionCreateType =>{
    return{
        type: FIRST_SET_MESSAGE,
        message
    }
}
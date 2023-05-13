const SECOND_INC_ADD = 'SECOND-INC-ADD'
const SECOND_INC_RESET = 'SECOND-INC-RESET'
const SECOND_SET_MIN_MAX = 'SECOND-SET-MIN-MAX'
const SECOND_CHANGE_MIN = 'SECOND-CHANGE-MIN'
const SECOND_CHANGE_MAX = 'SECOND-CHANGE-MAX'
const SECOND_SET_MESSAGE = 'SECOND-SET-MESSAGE'

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
    type: 'SECOND-INC-ADD'
}
type IncResetActionCreateType = {
    type: 'SECOND-INC-RESET'
}
type SetMinMaxActionCreateType = {
    type: 'SECOND-SET-MIN-MAX'
}
type ChangeMinActionCreateType = {
    type: 'SECOND-CHANGE-MIN'
    min: number
}
type ChangeMaxActionCreateType = {
    type: 'SECOND-CHANGE-MAX'
    max: number
}
type ChangeSetMessageActionCreateType = {
    type: 'SECOND-SET-MESSAGE'
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

export const secondCounterReducer = (state = initialState, action:ActionType): InitialStateType => {
    switch (action.type) {
        case SECOND_INC_ADD:
            return {...state, data: {...state.data, inc: {...state.data.inc, inc: state.data.inc.inc + 1}}}
        case SECOND_INC_RESET:
            return {...state, data: {...state.data, inc: {...state.data.inc, inc: state.data.inc.min}}}
        case SECOND_SET_MIN_MAX:
            return {...state, data: {...state.data, inc: {...state.data.inc, inc: state.data.minMax.min, min: state.data.minMax.min, max: state.data.minMax.max}}}
        case SECOND_CHANGE_MIN:
            if (action.min === state.data.minMax.max || action.min < 0 || state.data.minMax.max < 0 || action.min > state.data.minMax.max){
                return {...state, message: 'error', data: {...state.data, minMax: {...state.data.minMax, min: action.min}}}
            }else {
                return {...state, message: 'press "set"', data: {...state.data, minMax: {...state.data.minMax, min: action.min}}}
            }
        case SECOND_CHANGE_MAX:
            if (state.data.minMax.min === action.max || state.data.minMax.min < 0 || action.max < 0 || state.data.minMax.min > action.max){
                return {...state, message: 'error', data: {...state.data, minMax: {...state.data.minMax, max: action.max}}}
            }else {
                return {...state, message: 'press "set"', data: {...state.data, minMax: {...state.data.minMax, max: action.max}}}
            }
        case SECOND_SET_MESSAGE:
            return {...state, message: action.message}
        default:
            return state
    }
}

export const secondIncAddAC = (): IncAddActionCreateType =>{
    return{
        type: SECOND_INC_ADD
    }
}

export const secondIncResetAC = (): IncResetActionCreateType =>{
    return{
        type: SECOND_INC_RESET
    }
}

export const secondSetMinMaxAC = (): SetMinMaxActionCreateType =>{
    return{
        type: SECOND_SET_MIN_MAX
    }
}

export const secondChangeMinAC = (num: number): ChangeMinActionCreateType =>{
    return{
        type: SECOND_CHANGE_MIN,
        min: num
    }
}

export const secondChangeMaxAC = (num: number): ChangeMaxActionCreateType =>{
    return{
        type: SECOND_CHANGE_MAX,
        max: num
    }
}

export const secondSetMessageAC = (message: MessageType): ChangeSetMessageActionCreateType =>{
    return{
        type: SECOND_SET_MESSAGE,
        message
    }
}
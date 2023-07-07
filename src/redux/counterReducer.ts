import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'counter',
    initialState:{
        data: {
            inc: {
                inc: 0,
                min: 0,
                max: 5
            } as IncType,
            minMax: {min:0, max: 5} as MinMaxType
        },
        message: 'press "set"' as MessageType
    },
    reducers:{
        incAdd: (state)=>{
            state.data.inc.inc += 1
        },
        incReset: (state)=>{
            state.data.inc.inc = state.data.inc.min
        },
        setMinMax: (state)=>{
            state.data.inc.inc = state.data.minMax.min
            state.data.inc.min = state.data.minMax.min
            state.data.inc.max = state.data.minMax.max
        },
        changeMin: (state, action: PayloadAction<{min: number}>)=>{
            state.data.minMax.min = action.payload.min
            if (action.payload.min === state.data.minMax.max || action.payload.min < 0 || state.data.minMax.max < 0 || action.payload.min > state.data.minMax.max){
                state.message = 'error'
            } else{
                state.message = 'press "set"'
            }
        },
        changeMax: (state, action: PayloadAction<{max: number}>)=>{
            state.data.minMax.max = action.payload.max
            if (state.data.minMax.min === action.payload.max || state.data.minMax.min < 0 || action.payload.max < 0 || state.data.minMax.min > action.payload.max){
                state.message = 'error'
            } else{
                state.message = 'press "set"'
            }
        },
        setMessage: (state, action: PayloadAction<{message: MessageType}>)=>{
            state.message = action.payload.message
        }
    }
})

export const counterReducer = slice.reducer
export const counterActions = slice.actions


export type IncType = {
    inc: number
    min: number
    max: number
}
export type MinMaxType = {
    min: number
    max: number
}
export type MessageType = 'press "set"' | 'error' | ''


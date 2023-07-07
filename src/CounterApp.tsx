import React, {ChangeEvent, useEffect, useState} from 'react';
import {Settings} from "./components/Settings/Settings";
import {Counter} from "./components/Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "./redux/store";
import {
    IncType,
    MessageType,
    MinMaxType, counterActions,
} from "./redux/counterReducer";


export const CounterApp: React.FC = () => {

    const app = {
        background: '#1a1a1a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    }
    const inc = useSelector<RootStoreType, IncType>(state => state.counter.data.inc)

    const message = useSelector<RootStoreType, MessageType>(state => state.counter.message)
    const minMax = useSelector<RootStoreType, MinMaxType>(state => state.counter.data.minMax)

    const dispatch = useDispatch()

    const incAdd = () => {
        dispatch(counterActions.incAdd())
    }
    const incReset = () => {
        dispatch(counterActions.incReset())
    }
    const setMinMaxInc = () => {
        dispatch(counterActions.setMinMax())
    }
    const setMaxInc = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(counterActions.changeMax({max:Number(e.currentTarget.value)}))
    }
    const setMinInc = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(counterActions.changeMin({min:Number(e.currentTarget.value)}))
    }
    const setInc = () =>{
        setMinMaxInc()
        dispatch(counterActions.setMessage({message: ''}))
    }

    return (
        <div style={app}>
            <Settings
                message={message}
                minMax={minMax}
                setMaxInc={setMaxInc}
                setMinInc={setMinInc}
                setInc={setInc}
            />
            <Counter
                inc={inc}
                incAdd={incAdd}
                incReset={incReset}
                message={message}
            />
        </div>
    );
};


import React, {ChangeEvent, useEffect, useState} from 'react';
import {Settings} from "./components/Settings/Settings";
import {Counter} from "./components/Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "./redux/store";
import {
    firstChangeMaxAC, firstChangeMinAC,
    firstIncAddAC, firstIncResetAC, firstSetMessageAC, firstSetMinMaxAC,
    IncType,
    MessageType,
    MinMaxType,
} from "./redux/firstCounterReducer";


export const CounterApp1: React.FC = () => {

    const app = {
        background: '#1a1a1a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    }
    const inc = useSelector<RootStoreType, IncType>(state => state.firstCounter.data.inc)

    const message = useSelector<RootStoreType, MessageType>(state => state.firstCounter.message)
    const minMax = useSelector<RootStoreType, MinMaxType>(state => state.firstCounter.data.minMax)

    const dispatch = useDispatch()

    // useEffect(() => {
    //     let newMin = localStorage.getItem('min1')
    //     let newMax = localStorage.getItem('max1')
    //     let newInc = localStorage.getItem('inc1')
    //     let message = localStorage.getItem('message1')
    //     if (newMin && newMax && newInc && message) {
    //         let newMinNum = JSON.parse(newMin)
    //         let newMaxNum = JSON.parse(newMax)
    //         let newIncNum = JSON.parse(newInc)
    //         let parseMessage = JSON.parse(message)
    //         setInk({...inc, inc: newIncNum, min: newMinNum, max: newMaxNum})
    //         setMessage(parseMessage)
    //     } else {
    //         localStorage.setItem('min1', JSON.stringify(0))
    //         localStorage.setItem('max1', JSON.stringify(5))
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('min1', JSON.stringify(inc.min))
    //     localStorage.setItem('max1', JSON.stringify(inc.max))
    //     localStorage.setItem('inc1', JSON.stringify(inc.inc))
    //     localStorage.setItem('message1', JSON.stringify(message))
    // }, [inc])

    const incAdd = () => {
        dispatch(firstIncAddAC())
    }

    const incReset = () => {
        dispatch(firstIncResetAC())
    }

    const setMinMaxInc = () => {
        dispatch(firstSetMinMaxAC())
    }

    const setMaxInc = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(firstChangeMaxAC(Number(e.currentTarget.value)))
    }

    const setMinInc = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(firstChangeMinAC(Number(e.currentTarget.value)))
    }

    const setInc = () =>{
        setMinMaxInc()
        dispatch(firstSetMessageAC(''))
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


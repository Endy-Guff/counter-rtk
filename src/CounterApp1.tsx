import React, {useEffect, useState} from 'react';
import {inspect} from "util";
import {Settings} from "./components/Settings/Settings";
import {Counter} from "./components/Counter/Counter";
import {IncStateType} from "./App";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "./redux/store";
import {incAddAC, incResetAC, IncType, setMinMaxAC} from "./redux/counterReducer";



export const CounterApp1: React.FC = (

) => {

    const app = {
        background: '#1a1a1a',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    }
    const inc = useSelector<RootStoreType, IncType>(state => state.data.inc)
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
        dispatch(incAddAC())
    }

    const incReset = () => {
        dispatch(incResetAC())
    }

    const setMinMaxInc = (min: number, max: number) => {
        dispatch(setMinMaxAC())
    }


    return (
        <div style={app}>
            <Settings
                setMinMaxInc={setMinMaxInc}
            />
            <Counter
                inc={inc}
                incAdd={incAdd}
                incReset={incReset}
            />
        </div>
    );
};


import React, {ChangeEvent, MouseEventHandler, useEffect, useState} from 'react';
import {Settings} from "./components/Settings/Settings";
import {Counter} from "./components/Counter/Counter";
import s from './CounterApp2.module.css'
import {
    IncType,
    MessageType,
    MinMaxType
} from "./redux/firstCounterReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "./redux/store";
import {
    secondChangeMaxAC,
    secondChangeMinAC,
    secondIncAddAC,
    secondIncResetAC,
    secondSetMessageAC,
    secondSetMinMaxAC
} from "./redux/secondCounterReducer";

type BtnIndicatorType = 'settings' | 'counter'

export const CounterApp2: React.FC = (props) => {

    const inc = useSelector<RootStoreType, IncType>(state => state.secondCounter.data.inc)

    const message = useSelector<RootStoreType, MessageType>(state => state.secondCounter.message)
    const minMax = useSelector<RootStoreType, MinMaxType>(state => state.secondCounter.data.minMax)

    const dispatch = useDispatch()

    // useEffect(() => {
    //     let newMin = localStorage.getItem('min2')
    //     let newMax = localStorage.getItem('max2')
    //     let newInc = localStorage.getItem('inc2')
    //     let message = localStorage.getItem('message2')
    //     if (newMin && newMax && newInc && message) {
    //         let newMinNum = JSON.parse(newMin)
    //         let newMaxNum = JSON.parse(newMax)
    //         let newIncNum = JSON.parse(newInc)
    //         let parseMessage = JSON.parse(message)
    //         setInk({...inc, inc: newIncNum, min: newMinNum, max: newMaxNum})
    //         setMessage(parseMessage)
    //     } else {
    //         localStorage.setItem('min2', JSON.stringify(0))
    //         localStorage.setItem('max2', JSON.stringify(5))
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('min2', JSON.stringify(inc.min))
    //     localStorage.setItem('max2', JSON.stringify(inc.max))
    //     localStorage.setItem('inc2', JSON.stringify(inc.inc))
    //     localStorage.setItem('message2', JSON.stringify(message))
    // }, [inc])

    const incAdd = () => {
        dispatch(secondIncAddAC())
    }

    const incReset = () => {
        dispatch(secondIncResetAC())
    }

    const setMinMaxInc = () => {
        dispatch(secondSetMinMaxAC())
    }

    const setMaxInc = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(secondChangeMaxAC(Number(e.currentTarget.value)))
    }

    const setMinInc = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(secondChangeMinAC(Number(e.currentTarget.value)))
    }

    const setInc = () =>{
        setMinMaxInc()
        dispatch(secondSetMessageAC(''))
    }

    const [btnIndicator, setBtnIndicator] = useState<BtnIndicatorType>('settings')

    const navLinkHandler = (e: any) => {
        if (e.target.innerText !== 'Settings') {
            setBtnIndicator('counter')
        }
        if (e.target.innerText !== 'Counter') {
            setBtnIndicator('settings')
        }
        // setBtnIndicator(location.pathname==='/settings'&&e.target.innerText!=='Settings'?'/counter':'/settings')
    }

    const classBtnIndicator = s.btnBox + (btnIndicator === 'settings' ? ' ' + s.pos1 : ' ' + s.pos2)

    return (
        <div className={s.app}>
            <div className={classBtnIndicator}>
                <button
                    onClick={navLinkHandler}
                >
                    Settings
                </button>
                <button
                    onClick={navLinkHandler}
                >Counter
                </button>
            </div>
            {btnIndicator === 'settings'
                ? <Settings
                    message={message}
                    minMax={minMax}
                    setMaxInc={setMaxInc}
                    setMinInc={setMinInc}
                    setInc={setInc}
                />
                : <Counter
                    inc={inc}
                    incAdd={incAdd}
                    incReset={incReset}
                    message={message}
                />
            }


        </div>
    );
};


import React, {MouseEventHandler, useEffect, useState} from 'react';
import {Settings} from "./components/Settings/Settings";
import {Counter} from "./components/Counter/Counter";
import {IncStateType} from "./App";
import s from './CounterApp2.module.css'
import {NavLink, Route, Routes, useLocation, useNavigate} from "react-router-dom";


export const CounterApp2: React.FC = (props) => {

    const [inc, setInk] = useState<IncStateType>({inc: 0, min: 0, max: 5})
    const [message, setMessage] = useState('press "set"')


    useEffect(() => {
        let newMin = localStorage.getItem('min2')
        let newMax = localStorage.getItem('max2')
        let newInc = localStorage.getItem('inc2')
        let message = localStorage.getItem('message2')
        if (newMin && newMax && newInc && message) {
            let newMinNum = JSON.parse(newMin)
            let newMaxNum = JSON.parse(newMax)
            let newIncNum = JSON.parse(newInc)
            let parseMessage = JSON.parse(message)
            setInk({...inc, inc: newIncNum, min: newMinNum, max: newMaxNum})
            setMessage(parseMessage)
        } else {
            localStorage.setItem('min2', JSON.stringify(0))
            localStorage.setItem('max2', JSON.stringify(5))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('min2', JSON.stringify(inc.min))
        localStorage.setItem('max2', JSON.stringify(inc.max))
        localStorage.setItem('inc2', JSON.stringify(inc.inc))
        localStorage.setItem('message2', JSON.stringify(message))
    }, [inc])

    const incAdd = () => {
        setInk({...inc, inc: inc.inc + 1})
    }

    const incReset = () => {
        setInk({...inc, inc: inc.min})
    }

    const setMinMaxInc = (min: number, max: number) => {
        setInk({...inc, inc: min, min: min, max: max})
    }

    const navigate = useNavigate()
    const location = useLocation()
    const homePage = location.pathname === '/' ? navigate('/settings') : ''

    const [btnIndicator, setBtnIndicator] = useState<string>(location.pathname)

    const navLinkHandler = (e: any) =>{
        if (e.target.innerText!=='Settings'){
            setBtnIndicator('/counter')
        }
        if (e.target.innerText!=='Counter'){
            setBtnIndicator('/settings')
        }
            // setBtnIndicator(location.pathname==='/settings'&&e.target.innerText!=='Settings'?'/counter':'/settings')
    }

    const classBtnIndicator = s.btnBox + (btnIndicator==='/settings' || btnIndicator==='/'? ' ' + s.pos1: ' ' + s.pos2)

    return (
        <div className={s.app}>
            <div className={classBtnIndicator}>
                <NavLink
                    onClick={navLinkHandler}
                    to={'/settings'}
                >Settings</NavLink>
                <NavLink
                    onClick={navLinkHandler}
                    to={'/counter'}
                >Counter</NavLink>
            </div>
            <Routes>
                <Route path={'/settings'} element={
                    <Settings
                        setMinMaxInc={setMinMaxInc}
                    />
                }/>
                <Route path={'/counter'} element={
                    <Counter
                        inc={inc}
                        incAdd={incAdd}
                        incReset={incReset}
                    />
                }/>
            </Routes>
        </div>
    );
};


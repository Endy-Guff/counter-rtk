import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterApp1} from "./CounterApp1";
import {CounterApp2} from "./CounterApp2";
import {Button} from "./components/Button/Button";

export type IncStateType = {
    inc: number
    min: number
    max: number
}

type CounterAppType = 'firstCounterApp' | 'secondCounterApp'

function App() {

    const [counterApp, setCounterApp] = useState<CounterAppType>('firstCounterApp')

    // const [inc, setInk] = useState<IncStateType>({inc: 0, min: 0, max: 5})
    // const [message, setMessage] = useState('press "set"')
    //
    //
    // useEffect(() => {
    //     let newMin = localStorage.getItem('min')
    //     let newMax = localStorage.getItem('max')
    //     let newInc = localStorage.getItem('inc')
    //     let message = localStorage.getItem('message')
    //     if (newMin && newMax && newInc) {
    //         let newMinNum = JSON.parse(newMin)
    //         let newMaxNum = JSON.parse(newMax)
    //         let newIncNum = JSON.parse(newInc)
    //         let parseMessage = JSON.parse(newInc)
    //         setInk({...inc, inc: newIncNum, min: newMinNum, max: newMaxNum})
    //         setMessage(parseMessage)
    //     } else {
    //         localStorage.setItem('min', JSON.stringify(0))
    //         localStorage.setItem('max', JSON.stringify(5))
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('min', JSON.stringify(inc.min))
    //     localStorage.setItem('max', JSON.stringify(inc.max))
    //     localStorage.setItem('inc', JSON.stringify(inc.inc))
    //     localStorage.setItem('message', JSON.stringify(message))
    // }, [inc])
    //
    // const incAdd = () => {
    //     setInk({...inc, inc: inc.inc + 1})
    // }
    //
    // const incReset = () => {
    //     setInk({...inc, inc: inc.min})
    // }
    //
    // const setMinMaxInc = (min: number, max: number) => {
    //     setInk({...inc, inc: min, min: min, max: max})
    // }

    return (

        <div className="App">
            <div className={'btnBox'}>
                <Button
                    name={'Two-window counter'}
                    callback={()=>setCounterApp('firstCounterApp')}
                    disabled={counterApp==='firstCounterApp'}
                />
                <Button
                    name={'Single window counter'}
                    callback={()=>setCounterApp('secondCounterApp')}
                    disabled={counterApp==='secondCounterApp'}
                />
            </div>
            {counterApp==='firstCounterApp'
            ?<CounterApp1/>
            :<CounterApp2/>}

            {/*<Settings*/}
            {/*    inc={inc}*/}
            {/*    setMinMaxInc={setMinMaxInc}*/}
            {/*    setMessage={setMessage}*/}
            {/*    message={message}*/}
            {/*/>*/}
            {/*<Counter*/}
            {/*    inc={inc}*/}
            {/*    incAdd={incAdd}*/}
            {/*    incReset={incReset}*/}
            {/*    message={message}*/}
            {/*/>*/}
        </div>

    );
}

export default App;

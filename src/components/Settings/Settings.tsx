import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Settings.module.css'
import {Button} from "../Button/Button";
import {IncStateType} from "../../App";
import {Input} from "../Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../redux/store";
import {changeMaxAC, changeMinAC, MinMaxType, setMessageAC} from "../../redux/counterReducer";

type PropsType = {
    setMinMaxInc: (min: number, max: number) =>void
}

type LocalStateType = {
    min: number
    max: number
}
export const Settings: React.FC<PropsType> = (
    {
        setMinMaxInc,
    }
) => {
    const message = useSelector<RootStoreType, string>(state => state.message)
    const minMax = useSelector<RootStoreType, MinMaxType>(state => state.data.minMax)
    const dispatch = useDispatch()

    const inputClass = minMax.min === minMax.max || minMax.min < 0 || minMax.max < 0

    // useEffect(()=>{
    //     setMinMax({...minMax, min:inc.min, max:inc.max})
    // }, [inc])
    //
    // useEffect(()=>{
    //     inputClass?setMessage('error'):setMessage('press "set"')
    // }, [inputClass])

    const inputHandlerMax = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch(changeMaxAC(Number(e.currentTarget.value)))
    }

    const inputHandlerMin = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch(changeMinAC(Number(e.currentTarget.value)))
    }

    const setHandler = () => {
        setMinMaxInc(minMax.min, minMax.max)
        dispatch(setMessageAC(''))
    }

    const validate = !message || minMax.min === minMax.max || minMax.max < minMax.min || minMax.min < 0 || minMax.max < 0

    return (
        <div className={s.wrapper}>
            <div className={s.displaySet}>
                <div className={s.displaySetItem}>
                    <h5 className={s.displayItemTitle}>Max Value</h5>
                    <Input className={inputClass?s.error:''} callBack={inputHandlerMax} type='number' value={minMax.max} />
                    {/*<input className={inputClass?s.error:''} value={minMax.max} type="number" step={1} onChange={inputHandlerMax}/>*/}
                </div>
                <div className={s.displaySetItem}>
                    <h5 className={s.displayItemTitle}>Min Value</h5>
                    <Input className={inputClass?s.error:''} callBack={inputHandlerMin} type='number' value={minMax.min} />
                    {/*<input className={inputClass?s.error:''} value={minMax.min} type="number" step={1} onChange={inputHandlerMin}/>*/}
                </div>
            </div>
            <div className={s.buttonBox}>
                <Button name={'set'} callback={() => setHandler()} disabled={validate}/>
            </div>
        </div>
    );
};


import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type PropsType = {
    className: string
    callBack: (e:ChangeEvent<HTMLInputElement>) => void
    type: string
    value: number
}

export const Input: React.FC<PropsType> = (
    {
        className,
        callBack,
        type,
        value
    }
) => {

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        callBack(e)
    }

    const inputClass = s.input+' '+className

    return (
        <input className={inputClass} value={value} type={type} step={1}
               onChange={inputHandler}/>
    );
};


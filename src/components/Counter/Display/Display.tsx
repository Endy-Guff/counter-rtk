import React from "react";
import s from './Display.module.css'
import {isNumberObject} from "util/types";

type PropsType = {
    value: number,
    maxInc: number,
    message: string
}

export const Display: React.FC<PropsType> = (
    {
        value,
        maxInc,
        message
    }) => {
    return (
        <div className={s.display}>
            <div className={value === maxInc || message === 'error' ? s.red : ''}>{!message?value:message}</div>
        </div>
    )
}
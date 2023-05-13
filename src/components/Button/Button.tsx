import React from "react";
import s from './Button.module.css'

type PropsType = {
    name: string
    callback: () => void
    disabled: boolean
}

export const Button: React.FC<PropsType> = (
    {
        name,
        callback,
        disabled
    }) => {
    const onClickHandler = () => {
        callback()
    }

    return (
        <button className={s.btn} onClick={onClickHandler} disabled={disabled}>{name}</button>
    )
}
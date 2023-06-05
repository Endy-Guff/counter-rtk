import React from 'react';
import s from './Counter.module.css'
import {Display} from "./Display/Display";
import {Button} from "../Button/Button";
import {IncStateType} from "../../App";
import {useSelector} from "react-redux";
import {RootStoreType} from "../../redux/store";
import {MessageType} from "../../redux/counterReducer";

type PropsType ={
    inc: IncStateType
    incAdd: () => void
    incReset: () => void
    message: MessageType
}

export const Counter:React.FC<PropsType> = (
    {
        inc,
        incAdd,
        incReset,
        message
    }
) => {


    return (
        <div className={s.wrapper}>
            <Display value={inc.inc} maxInc={inc.max} message={message}/>
            <div className={s.buttonBox}>
                <Button
                    name='inc'
                    callback={incAdd}
                    disabled={message!=''||inc.inc >= inc.max}/>
                <Button
                    name='reset'
                    callback={incReset}
                    disabled={message!=''||inc.inc === inc.min}/>
            </div>
        </div>
    );
};


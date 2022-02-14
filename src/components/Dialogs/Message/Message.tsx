import React from 'react';
import s from '../Dialogs.module.css';

type MessagePropsType = {
    value: string
}
export const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message}>
            {props.value}
        </div>
    );
};
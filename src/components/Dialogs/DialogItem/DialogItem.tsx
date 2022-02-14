import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: number
}
export const DialogItem = (props:DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink className={s.dialog} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};


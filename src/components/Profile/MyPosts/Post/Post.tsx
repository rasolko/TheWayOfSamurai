import React from 'react';
import s from './Post.module.css';
type propsType = {
    message: string,
    likesCount: number,
}
const Post = (props:propsType) => {
    return (
        <div className={s.item}>
            <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png" alt=""/>
            {props.message}
            <br/>
            <span>Like: </span> {props.likesCount}
        </div>
    )
}
export default Post;
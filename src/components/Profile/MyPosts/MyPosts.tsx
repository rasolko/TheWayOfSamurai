import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message='Hi' likesCount={10}/>
                <Post message='Hello' likesCount={20}/>
            </div>
        </div>
    )
}
export default MyPosts;
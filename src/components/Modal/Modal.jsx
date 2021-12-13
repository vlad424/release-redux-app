import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './modal.css'

const Modal = ({active, setActive}) => {
    const [post,setPost] = useState({})
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const handleInput = (post) => {
        console.log(post.trim)
        dispatch( {type: "ADD_POST", payload: post} )
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick = {() => setActive(false)}>
            <div className="modal_content" onClick = {e => e.stopPropagation()}>
                <input 
                    type="text" 
                    onChange={e => setPost({...post, content: e.target.value})}
                    value={posts.content}
                    placeholder="input content"
                />
                <button className="submit_modal" onClick={() => handleInput(post)}>
                    +
                </button>
            </div>
        </div>
    );
}; 

export default Modal;
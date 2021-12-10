import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './modal.css'

const Modal = ({active, setActive}) => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const handleInput = (e) => {
        const post = {
            content: e.target.value
	    }
        dispatch({type: "ADD_POST", payload: post})
    }

    console.log(posts)

    return (
        <div className={active ? "modal active" : "modal"} onClick = {() => setActive(false)}>
            <div className="modal_content" onClick = {e => e.stopPropagation()}>
                <input 
                    type="text" 
                    onChange={e => setTimeout(handleInput(e), 3000)}
                    value={posts.content}
                    placeholder="input content"
                />
                <button className="submit_modal" onClick={() => dispatch()}>
                    +
                </button>
            </div>
        </div>
    );
}; 

export default Modal;
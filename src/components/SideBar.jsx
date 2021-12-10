import React from 'react';
import { useSelector } from 'react-redux';

const SideBar = () => {
    const posts = useSelector(state => state.posts)
    
    console.log(posts)

    return(
        <div className="SideBar">
            {posts.lenght > 0 ?
                posts.map(post => (
                    <span>{post.content}</span>
                ))
                :
                    <span>nothing</span>
            }
        </div>
    );
}

export default SideBar
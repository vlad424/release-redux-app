import React from 'react';
import { useSelector } from 'react-redux';

const PostsBar = () => {
    const posts = useSelector(state => state.posts)
    
    return (
        <div className="PostsBar">
            <h1>Ur posts</h1>
            <div className="posts">
                {posts.map(post => (
                    <span>
                        {post.content}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PostsBar;
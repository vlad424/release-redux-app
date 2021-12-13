import React from 'react';
import { useSelector } from 'react-redux';

const PostsBar = () => {
    const posts = useSelector(state => state.posts)
    var pid = 0

    return (
        <div className="PostsBar">
            <h1>UR TASKS</h1>
            <div className="posts">
                {posts.map(post => (
                    <span className="post">
                        {++pid}.
                        {post.content}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PostsBar;
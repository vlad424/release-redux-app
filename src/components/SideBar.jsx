import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts.length);

  return (
    <div className="SideBar">
      <h1>TASKS</h1>
      {posts.length ? (
        posts.map((post) => <span>{post.content}</span>)
      ) : (
        <span> nothing </span>
      )}
    </div>
  );
};

export default SideBar;
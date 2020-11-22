import React from "react";
import PostItem from './PostItem';
import PostForm from './PostForm';
import './css/content.css';

const Content = () => {
  return (
    <>
      <div className="col-lg-8">
        <PostForm></PostForm>
        <PostItem></PostItem>
        <PostItem></PostItem>
      </div>
    </>
  );
};
export default Content;

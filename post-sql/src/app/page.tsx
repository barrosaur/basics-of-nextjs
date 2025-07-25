'use client';
import React, { useState } from "react";
import './page.css'
import PostTable from "@/components/PostTable";
import CreateNewPost from "@/components/CreateNewPost";

export default function Home() {
  const [createNewPost, setCreateNewPost] = useState(false);

  return (
    <div className="home">
      <header>
        <h1>Posts</h1>
        <div className="create-new-post-wrapper">
          <button onClick={() => setCreateNewPost(!createNewPost)}>
            + Create new post
          </button>
        </div>
      </header>
      {createNewPost ? (
        <CreateNewPost onCancel={() => setCreateNewPost(false)}/>
      ) : (
        <PostTable/>
      )}
    </div>
  );
}
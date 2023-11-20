import React from "react";
import PostCard from "./PostCard";

const PostsList = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col mt-8">
        <div className="flex ">
          <span className="min-w-fit p-2 border-slate-400 border-x-2 border-t-2 rounded-tr-md text-center font-semibold text-cyan-600">
            134 Posts
          </span>
          <div className="w-full border-b-2 border-slate-400"></div>
        </div>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </React.Fragment>
  );
};

export default PostsList;

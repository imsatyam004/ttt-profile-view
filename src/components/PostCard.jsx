import React from "react";
import { MdOutlineThumbUp } from "react-icons/md";

const PostCard = () => {
  return (
    <div className="flex flex-col mt-8 px-10 pb-6 border-b-2">
      <div className="flex justify-between items-center">
        <p className="font-bold">A Changing World Order</p>
        <span className="bg-yellow-500 rounded-full p-1">
          <MdOutlineThumbUp size={12} color="white" />
        </span>
      </div>
      <div className="flex w-fit h-16 mt-4 overflow-hidden ">
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          soluta eligendi accusamus sed? A ipsam autem fugiat vel aperiam,
          laudantium itaque, tenetur dolor illo accusantium numquam quisquam
          voluptates, laboriosam qui eum repudiandae unde consequatur dolorem
          non soluta? Necessitatibus nostrum ab earum consequatur laborum id
          officia dolor eum architecto. Nobis, deleniti.
        </p>
        <p className="box-content -bottom-[0.15em] relative z-10 self-end right-[1.2em]">...</p>
      </div>
      <div className="flex justify-between mt-6 text-[0.6em] text-slate-700">
        <div className="">
          <span className="text-cyan-500">musing </span>by anujgosalia
        </div>
        <div className="text-slate-700 text-opacity-70">
          <span>January 21</span>
          <span>1 min Read</span>
          <span>156 Views</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

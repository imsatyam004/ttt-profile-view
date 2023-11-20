import React from "react";
import "../index.css";

const NavBar = () => {
  return (
    <>
      <nav className="box-border px-6 py-2 bg-black ">
        <div className="flex justify-between items-center">
          <div className="flex justify-evenly items-center gap-x-1.5">
            <img
              className="rounded-full bg-cover w-5 h-5"
              src="https://www.terriblytinytales.com/img/home/ttt.svg"
              alt="TTT Logo"
            />
            <div className="h-6 border-r-2 rounded-md border-r-yellow-500"></div>
            <div className="font-semibold tracking-[.25em] text-[0.6em] text-white">
              STORIES
            </div>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-500/90 rounded-md px-2 h-7 font-bold text-sm hover:text-slate-100 ">
            Courses
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

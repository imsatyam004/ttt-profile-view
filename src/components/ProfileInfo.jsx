import React from "react";
import { IoDiamond, IoEye } from "react-icons/io5";
import { MdOutlineVerified, MdOutlineThumbUp } from "react-icons/md";
import { TiStarOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";

const ProfileInfo = () => {
  return (
    <React.Fragment>
      <img
        src="https://picsum.photos/800/400"
        alt="CoverPicture"
        className="w-full h-40 bg-cover bg-center"
      />

      <div className="flex flex-col mx-10 mb-6">
        <div className="flex justify-start z-10">
          <div>
            <img
              src="https://picsum.photos/70"
              alt="ProfilePicture"
              className="-mt-4 rounded-full border-2 border-slate-600"
            />
          </div>
          <div className="ml-4 mt-1">
            {/* start of name and verification icon */}
            <div className="flex flex-wrap items-baseline gap-x-0.5 mb-1.5">
              <p className="font-bold text-xs">Anuj Gosalia</p>
              <IoDiamond
                size="10"
                color="white"
                className="bg-purple-800 rounded-full p-[2px]"
              />
              <MdOutlineVerified
                size="10"
                color="black"
                className="bg-green-500 rounded-full"
              />
            </div>
            {/* end of name and verification icon */}

            {/* start of follwers */}
            <div className="inline-flex flex-wrap gap-1">
              <div className=" flex flex-col items-center ">
                <div className="box-border border-[1px] border-slate-400 rounded-md px-[8px] py-[0.10em] text-xs font-bold text-slate-400">
                  6482
                </div>
                <div className="text-slate-400 font-bold text-[0.5em] ">
                  Followers
                </div>
              </div>
              <div className=" flex flex-col items-center">
                <div className="box-border border-[1px] border-slate-400 rounded-md px-[8px] py-[0.10em] text-xs font-bold text-slate-400 text-center">
                  245
                </div>
                <div className="text-slate-400 font-bold text-[0.5em] ">
                  Following
                </div>
              </div>
            </div>
            {/* end of follwers */}
          </div>
          {/* end of prebio */}
        </div>
        <p className="text-[.65em] mt-3">
          Co-founder & CEO at Terribly Tiny Tales
        </p>
        <p className="text-[.5em] -mt-[0.2em] text-blue-500">instagram link</p>
        <div className="flex flex-wrap gap-x-4 mt-2 mx-1">
          <span className="inline-flex items-baseline">
            <TiStarOutline
              color="white"
              size="10"
              title="Star"
              className="self-center bg-cyan-500 rounded-full p-[1px]"
            />
            <span className="ml-1 text-[0.5em] font-bold">125</span>
          </span>
          <span className="inline-flex items-baseline ">
            <MdOutlineThumbUp
              color="white"
              size="10"
              title="Star"
              className="self-center bg-yellow-500 rounded-full p-[1px]"
            />
            <span className="ml-1 text-[0.5em] font-bold">12</span>
          </span>
          <span className="inline-flex items-baseline">
            <IoEye
              color="white"
              size="10"
              title="Star"
              className="self-center bg-slate-600 rounded-full p-[1px]"
            />
            <span className="ml-1 text-[0.5em] font-bold">57.8K</span>
          </span>
          <span className="inline-flex items-baseline">
            <FaRegHeart
              color="white"
              size="10"
              title="Star"
              className="self-center bg-red-500 rounded-full p-[1px]"
            />
            <span className="ml-1 text-[0.5em] font-bold">26.0K</span>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileInfo;

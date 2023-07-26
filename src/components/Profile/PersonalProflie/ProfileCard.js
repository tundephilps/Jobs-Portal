import { Divider } from "@mui/material";
import React from "react";
import tie from "../../../images/tie.jpg";

const ProfileCard = () => {
  return (
    <div class="w-full mt-5 lg:mt-0  bg-white border border-gray-200 box rounded-lg shadow-lg shadow-color-blue shadow-spread-lg shadow-blur-lg  ">
      <div class="flex justify-between px-4 pt-4">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2 "
        >
          Message
        </button>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2"
        >
          Connect
        </button>
      </div>
      <div class="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={tie}
          alt="Tunde Philps"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900">Tunde Philps</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          Front End Developer
        </span>
        <p className="text-xs mb-1 mt-2">Lagos, Nigeria</p>
        <br />
        <hr
          className="color-blue-grey-50 text-3xl font-bold"
          style={{ color: "gray" }}
        ></hr>
        <Divider
          className=" text-3xl font-bold pb-3"
          style={{ color: "gray", width: "80%" }}
        />
        <span className="px-5 font-thin font-sans mt-3">
          Bad ass Software Engineer, Newcastle raised-based, vidoe game addict —
          writes, performs and records all of his own music.
        </span>
        <div class="flex mt-4 space-x-3 md:mt-6"></div>
      </div>
    </div>
  );
};

export default ProfileCard;

import React from "react";
import bell_icon from "../Images/icon/notification.png";
import cmt_icon from "../Images/icon/comment.png";
import b_pic from "../Images/user/os.jpg"
import f_pic from "../Images/user/lachlan.jpg";
import t_pic from "../Images/user/drwho.jpg";
import x_pic from "../Images/user/istock.jpg"
import z_pic from "../Images/user/jinwoo.jpg"


export default function SidePage() {
  return (
    <div className="">

      <div className="m-3 mr-7">

        {/* Top icon */}
        <div class="flex justify-end space-x-4 mr-4">

          <div>
            <button className="w-7 mt-5 relative rounded focus:outline-2 focus:ring-2 transition ease-in-out focus:bg-info-600 focus:outline-none active:bg-info-700">
              <img src={bell_icon} alt="Notification Icon" className="" />
            </button>
          </div>

          <div>
            <button className="w-7 mt-5 relative rounded focus:outline-2 focus:ring-2 transition ease-in-out focus:bg-info-600 focus:outline-none active:bg-info-700">
              {" "}
              <img src={cmt_icon} alt="Comment Icon" className="" />
            </button>
          </div>

          <div className=" w-9 h-9">
            <img className="w-full h-full rounded-full object-cover mt-4" src={b_pic} alt="pic" />
          </div>

        </div>

        {/* Button */}
        <div className="flex justify-end">
          <div>
            <button className="rounded-lg mt-6 text-center bg-green-600 px-6 py-1.5 text-white bg-gradient-to-r from-indigo-300 to-blue-500">
              My amazing trip
            </button>
          </div>
        </div>

        {/* Quotes */}
        {/*  */}
        <div>
          <p className="text-3xl text-left mt-5 text-gray-300">
            I like laying down on the sand and looking at the moon.
          </p>
        </div>

        {/* description */}
        <div>
          <p className="text-left mt-14 text-gray-400">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              27
            </span>{" "}
            people going to this trip
          </p>
        </div>

        {/* People */}
        <div className="mt-3 flex justify-start space-x-4">

          {/* First person */}
          <div className="w-11 h-11">
            <img
              src={f_pic}
              alt="User"
              className="w-full h-full object-cover rounded-full border-2 border-gray-400"
            />
          </div>

          {/* Second person */}
          <div className="w-11 h-11">
            <img
              src={t_pic}F
              alt="User"
              className="w-full h-full object-cover rounded-full  border-2 border-red-400"
            />
          </div>

          {/* Third person */}
          <div className="w-11 h-11">
            <img
              src={x_pic}
              alt="User"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* fourth person */}
          <div className="w-11 h-11">
            <img
              src={z_pic}
              alt="User"
              className="w-full h-full object-cover rounded-full border-2 border-gray-400"
            />
          </div>

          {/* Other person */}
          <div className="w-11 h-11">
            <p className="border-2 border-white w-full h-full object-cover rounded-full bg-gradient-to-r  from-indigo-300 to-blue-400 text-center text-white flex justify-center"
            ><span className="mt-2 ml-1">23+</span></p>
          </div>

        </div>
      </div>
    </div>
  );
}

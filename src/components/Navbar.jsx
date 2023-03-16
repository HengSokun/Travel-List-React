import React from "react";
import category_icon from "../Images/icon/category_icon.png";
import cube_icon from "../Images/icon/cube.png";
import list_icon from "../Images/icon/list.png";
import msg_icon from "../Images/icon/messenger.png";
import scc_icon from "../Images/icon/success.png";
import sec_icon from "../Images/icon/security.png";
import user_icon from "../Images/icon/users.png";
import add_icon from "../Images/icon/plus.png";

import f_pic from "../Images/user/christina.jpg";
import s_pic from "../Images/user/lachlan.jpg";
import t_pic from "../Images/user/nonamesontheway.jpg";

export default function Navbar() {
  return (
    <div className="sticky top-0">
      <nav className="flex-col relative space-y-2 w-24">
        <div className="ml-8">
          
          {/* Top Icon */}
          <div className="w-7 mb-8 mt-5">
            <button className="rounded focus:outline-2 focus:ring-2 transition ease-in-out hover:bg-info-600 hover:shadow-[1px_8px_10px_-4px_rgba(84,180,211,0.3),1px_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
              <img
                className="fill-white"
                src={category_icon}
                alt="Category Icon"
                style={{ width: 100 }}
              />
            </button>
          </div>

          {/* Section 2 Icon */}
          <div className="">
            <ul className="w-7 space-y-4 mb-8">
              <li>
                <button className="relative rounded focus:outline-2 focus:ring-2 transition ease-in-out hover:bg-info-600 hover:shadow-[0px_10px_10px_-4px_rgba(84,180,211,0.3),1px_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
                  <img src={cube_icon} alt="Cube Icon" />
                </button>
              </li>
              <li>
                <button className="relative rounded focus:outline-2 focus:ring-2 transition ease-in-out hover:bg-info-600 hover:shadow-[0px_10px_10px_-4px_rgba(84,180,211,0.3),1px_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
                <span class="absolute top-[-10px] right-[-10px] bg-red-600 rounded-full w-2.5 h-2.5 flex items-center justify-center text-white text-xs font-bold mt-2 mr-2.5"></span>
                  <img src={list_icon} alt="List Icon" />
                </button>
              </li>
              <li>
                <button className="relative rounded focus:outline-2 focus:ring-2 transition ease-in-out hover:bg-info-600 hover:shadow-[1px_8px_10px_-4px_rgba(84,180,211,0.3),1px_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
                <span class="absolute top-[-10px] right-[-10px] bg-red-600 rounded-full w-2.5 h-2.5 flex items-center justify-center text-white text-xs font-bold mt-2 mr-2.5"></span>
                  <img src={msg_icon} alt="Messenger Icon" />
                </button>
              </li>
              <li>
                <button className="relative rounded focus:outline-2 focus:ring-2 transition ease-in-out hover:bg-info-600 hover:shadow-[1px_8px_10px_-4px_rgba(84,180,211,0.3),1px_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
                  <img src={list_icon} alt="List Icon" />
                </button>
              </li>
            </ul>
          </div>

          {/* Section 3 Icon */}
          <div className="">
            <ul className="w-7 space-y-4 mb-8">
              <li>
                <button className="rounded focus:outline-2 focus:ring-2 transition ease-in-out hover:bg-info-600 hover:shadow-[1px_8px_10px_-4px_rgba(84,180,211,0.3),1px_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
                  <img src={scc_icon} alt="Success Icon" />
                </button>
              </li>
              <li>
                <button className="rounded focus:outline-2 focus:ring-2 transition ease-in-out hover:bg-info-600 hover:shadow-[1px_8px_10px_-4px_rgba(84,180,211,0.3),1px_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
                  <img src={sec_icon} alt="Security Icon" />
                </button>
              </li>
              <li>
                <button className="rounded focus:outline-2 focus:ring-2 transition ease-in-out hover:bg-info-600 hover:shadow-[1px_8px_10px_-4px_rgba(84,180,211,0.3),1px_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
                  <img src={user_icon} alt="User Icon" />
                </button>
              </li>
            </ul>
          </div>

          {/* Button Icon */}
          <div>
            <ul className="w-7 space-y-4  ">
              <li className="h-7 w-7">
                <img
                  src={f_pic}
                  alt="First User Icon"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
              <li className="h-7 w-7">
                <img
                  src={s_pic}
                  alt="Second User Icon"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
              <li className="h-7 w-7">
                <img
                  src={t_pic}
                  alt="Third User Icon"
                  className="w-full h-full object-cover rounded-full"
                />
              </li>
              <li>
                <button className="rounded focus:outline-2 focus:ring-2 transition ease-in-out hover:bg-info-600 hover:shadow-[1px_8px_10px_-4px_rgba(84,180,211,0.3),1px_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
                  <img
                    src={add_icon}
                    alt="Add Button Icon"
                    className="rounded-full"
                  />
                </button>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}

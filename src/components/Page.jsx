import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import SidePage from "./SidePage";
import bg_side from "../Images/bg/firewatch.jpg";

export default function Page() {
  return (
    <div>
      <div className="flex w-full">
        {/* left navbar */}
        <div className="bg-gray-400 h-screen w-1/12 ">
          <Navbar />
        </div>
        
        {/* main page */}
        <div className="w-8/12 m-8">
          <Main />
        </div>

        {/* right content */}
        <div
          className="w-3/12 h-screen relative"
          style={{
            backgroundImage: `url(${bg_side})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <SidePage />
        </div>

      </div>
    </div>
  );
}

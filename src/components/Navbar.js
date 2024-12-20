import React, { useEffect, useState } from "react";
import VerticalLine from "./VerticalLine";

function Navbar() {
  const [seconds, setSeconds] = useState(600);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  return (
    <>
      <div className="sticky top-0 flex h-16 z-30 w-fill bg-white justify-between items-center">
        <div className="z-20 flex items-center w-full px-5 cursor-pointer space-x-4">
          <img
            className="h-10 rounded-md"
            src={require("../Logo.jpg")}
            alt="logo"
          />
          <VerticalLine />
          <div className="text-gray-500 text-sm font-bold">Trial Lesson [Grade 1-3]</div>
        </div>
        <div className="text-gray-500 font-bold">{formatTime()}</div>
        <button className=" m-5 px-2 w-[120px] py-2 rounded-md text-white bg-custom-orange cursor-pointer">
          End class
        </button>
      </div>
    </>
  );
}

export default Navbar;

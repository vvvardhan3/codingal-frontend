import React, { useEffect, useState } from "react";
import VerticalLine from "../Layout/VerticalLine";
import EndClassModal from "../modal/EndClassModal";
import HamBurger from "./HamBurger";
import { ReactComponent as MobilleIcon } from "../../assets/images/mobile_logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [seconds, setSeconds] = useState(600);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timerActive, setTimerActive] = useState(true);
  const [wasTimerActive, setWasTimerActive] = useState(false);

  useEffect(() => {
    let interval;
    if (timerActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  const handleEndClass = () => {
    setTimerActive(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (wasTimerActive) {
      setTimerActive(true);
    }
  };

  const openModal = () => {
    setWasTimerActive(timerActive);
    setIsModalOpen(true);
    setTimerActive(false);
  };

  return (
    <>
      <div className="sticky top-0 flex h-16 z-30 w-full bg-white justify-between items-center">
        <div className="flex items-center w-full md:px-5 cursor-pointer space-x-4 ">
          <div>
            <Link to="/">
            <img
            className="h-10 rounded-md hidden md:block"
            src={require("../../assets/images/Logo.jpg")}
            alt="logo"
          />
             </Link>
          </div>
          
          <MobilleIcon className="h-10 sm:hidden" />
          <VerticalLine />
          <div className="text-gray-500 text-sm font-bold hidden md:block">
            Trial Lesson [Grade 1-3]
          </div>
        </div>
        <div className="text-gray-500 mr-4 font-bold hidden md:block">
          {formatTime()}
        </div>

        <nav className="hidden text-gray-500 font-bold md:block">
          <Link to="/posts">Posts</Link>
        </nav>

        <button
          onClick={openModal}
          className="m-5 px-2 w-[120px] py-2 rounded-md text-white bg-custom-orange hover:bg-orange-500 cursor-pointer hidden md:block "
        >
          End class
        </button>

        <HamBurger />
      </div>

      <EndClassModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onEndClass={handleEndClass}
      />
    </>
  );
}

export default Navbar;

import React, { useEffect, useState } from "react";
import VerticalLine from "./VerticalLine";
import EndClassModal from "./EndClassModal";

function Navbar() {
  const [seconds, setSeconds] = useState(600);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timerActive, setTimerActive] = useState(true);
  const [wasTimerActive, setWasTimerActive] = useState(false); 

  useEffect(() => {
    let interval = null;
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
        <div className="flex items-center w-full px-5 cursor-pointer space-x-4">
          <img
            className="h-10 rounded-md"
            src={require("../Logo.jpg")}
            alt="logo"
          />
          <VerticalLine />
          <div className="text-gray-500 text-sm font-bold">
            Trial Lesson [Grade 1-3]
          </div>
        </div>
        <div className="text-gray-500 font-bold">{formatTime()}</div>
        <button
          onClick={openModal}
          className="m-5 px-2 w-[120px] py-2 rounded-md text-white bg-custom-orange hover:bg-orange-500 cursor-pointer"
        >
          End class
        </button>
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

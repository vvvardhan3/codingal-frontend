import React from "react";

function Navbar() {
  const imageUrl =
    "https://fastly.codingal.com/images/logos/logos-christmas/logo-with-text.svg";

  return (
    <>
      <div className="sticky top-0 flex h-16 z-30 shadow bg-white">
        <div className="z-20 flex items-center justify-between w-full px-5 cursor-pointer">
          <img className="h-8 w-28" src={imageUrl} alt="logo" />
          <div>
            <button className="px-4 py-2 rounded-md text-white bg-custom-orange cursor-pointer">
              End class
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

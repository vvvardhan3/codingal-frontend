import Hamburger from "hamburger-react";
import { useState } from "react";


function HamBurger() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="sm:hidden pr-1">
        <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col items-center w-full">
            <li className="p-4 border-b border-gray-200 w-full text-center">
              <a href="/">Home</a>
            </li>
            <li className="p-4 border-b border-gray-200 w-full text-center">
              End Class
            </li>
          
          </ul>
        </div>
      )}
    </>
  );
}

export default HamBurger;

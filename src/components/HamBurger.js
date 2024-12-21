import Hamburger from "hamburger-react";
import { useState } from "react";

function HamBurger() {
    const [isOpen, setOpen] = useState(false);
  return (
    <div className="sm:hidden pr-1">
        <Hamburger size={25} toggled={isOpen} toggle={setOpen}/>
    </div>
  )
}

export default HamBurger;
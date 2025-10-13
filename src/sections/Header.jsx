import Search from "../components/Search";
import Button from "../components/Button";
import Humbergur from "../components/humbergur";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function humbergurHandler() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className={`fixed h-screen backdrop-blur-3xl
      ${!isOpen && "translate-x-60"} z-1 w-60 right-0 transition-all duration-300`}>
        <Humbergur onClose = {humbergurHandler} />
      </div>
      <div
        className="flex poppins items-center w-full justify-between mx-auto 
                        xl:max-w-7xl
                        px-8"
      >
        <div className="flex items-center gap-3">
          <div>
            <img
              src="/logos/Black White Minimalist Professional Initial Logo (1).png"
              alt=""
            />
          </div>
          <div className="hidden xl:inline">
            <Search />
          </div>
        </div>
        <div className="flex items-center gap-5 space-x-20">
          <div className="lg:flex gap-5 text-amber-50 hidden">
            <a href="#">Home</a>
            <a href="#">explore</a>
            <a href="#">pages</a>
            <a href="#">activity</a>
            <a href="#">elements</a>
          </div>
          <div className="flex items-center gap-3 ">
            <Button className="hidden md:block">connect wallet</Button>
            <button className="text-white text-4xl lg:hidden" onClick={humbergurHandler}>
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

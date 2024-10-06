import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center px-6 py-2">
      <div className="text-2xl"> Jeet's Portfolio</div>
      <div className="flex space-x-8">
        <button> About Me</button>
        <button> Hire Me</button>
      </div>
    </nav>
  );
};

export default Navbar;

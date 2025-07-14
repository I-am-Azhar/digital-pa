import React from "react";

const Icons = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Diagonal from top-right to bottom-left, tighter spacing */}
      <img
        src="/bg/icons8-facebook.svg"
        alt="Facebook"
        className="absolute top-12 right-12 w-28 h-28 opacity-80 rotate-[10deg]"
      />
      <img
        src="/bg/icons8-instagram-logo.svg"
        alt="Instagram"
        className="absolute top-1/3 right-1/5 w-28 h-28 opacity-80 rotate-[5deg]"
      />
      <img
        src="/bg/icons8-youtube.svg"
        alt="YouTube"
        className="absolute bottom-1/3 left-1/5 w-28 h-28 opacity-80 rotate-[-5deg]"
      />
      <img
        src="/bg/icons8-email.svg"
        alt="Email"
        className="absolute bottom-12 left-12 w-28 h-28 opacity-80 rotate-[-10deg]"
      />
    </div>
  );
};

export default Icons;

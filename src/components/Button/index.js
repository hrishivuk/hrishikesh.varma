import React from "react";

function Button({ className, children, ...rest }) {
  return (
    <button className={`px-6 py-2 font-medium w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;

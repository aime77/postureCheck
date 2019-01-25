import React from "react";

const Buttons=({ type = "default", children, onClick }) =>{
  return (
    <button onClick={onClick} >
      {children}
    </button>
  );
}
export default Buttons;

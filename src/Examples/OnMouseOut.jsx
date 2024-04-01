import React from "react";

const OnMouseOut = () => {
  const handleMouseOut = () => {
    console.log("Mouse left the element");
  };

  return (
    <div onMouseOut={handleMouseOut}>
      Di chuột ra khỏi phần tử này để xem sự kiện onMouseOut được kích hoạt.
    </div>
  );
};

export default OnMouseOut;

import React from "react";
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Color = (WrapperComponent) => {
  const randomColor = getRandomColor();
  return (props) => (
    <div style={{ color: randomColor }}>
      <WrapperComponent {...props} />
      {/*props -> dau vao co gi, dau ra phia cao cai do*/}
    </div>
  );
};

export default Color;

import React from "react";

function Item({ part, index, zIndex }) {
  return (
    <div>
      <img
        src={`./character/${part}/${index + 1}.png`}
        alt=""
        width={200}
        style={{ position: "absolute", zIndex, left: 0, top: 0 }}
      />
    </div>
  );
}

export default Item;

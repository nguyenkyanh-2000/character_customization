import React from "react";
import Item from "./Item";

function Avatar({
  body,
  eyes,
  hair,
  facial_hair,
  clothing1,
  clothing2,
  clothing3,
  eyebrows,
  mouth,
  hat,
  glasses,
  earrings,
  neckwear,
}) {
  return (
    <div className="avatar">
      <Item part="body" index={body} zIndex={1} />
      <Item part="eyes" index={eyes} zIndex={2} />
      <Item part="hair" index={hair} zIndex={2} />
      <Item part="clothes/layer_1" index={clothing1} zIndex={2} />
      <Item part="clothes/layer_2" index={clothing2} zIndex={3} />
      <Item part="clothes/layer_3" index={clothing3} zIndex={4} />
      <Item part="eyebrows" index={eyebrows} zIndex={2} />
      <Item part="facial_hair" index={facial_hair} zIndex={2} />
      <Item part="mouths" index={mouth} zIndex={2} />
      <Item part="accessories/hats" index={hat} zIndex={3} />
      <Item part="accessories/glasses" index={glasses} zIndex={3} />
      <Item part="accessories/earrings" index={earrings} zIndex={5} />
      <Item part="accessories/neckwear" index={neckwear} zIndex={5} />
      <Item part="nose" index={1} zIndex={3} />
    </div>
  );
}

export default Avatar;

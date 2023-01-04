import React from "react";

function ItemList({ total, part, selectedPart, setState }) {
  let items = [];
  for (let i = 0; i < total; i++)
    items.push(
      <div
        key={part + i}
        className={selectedPart === i ? "item selected" : "item"}
        onClick={() => setState(i)}
      >
        <img src={`character/${part}/${i + 1}.png`} alt="" />
      </div>
    );
  return <div className="item-list">{items}</div>;
}
export default ItemList;

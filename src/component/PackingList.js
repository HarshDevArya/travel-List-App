import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  handleDeleteItem,
  handlecheckbox,
  handleClearList,
}) {
  let sortedItem;
  const [sortBy, setSortBy] = useState("input");

  console.log("sorted Item: ", sortedItem);

  if (sortBy === "input") {
    sortedItem = items;
    console.log("sorted Item: ", sortedItem);
  } else if (sortBy === "description") {
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
    console.log("sorted Item: ", sortedItem);
  } else if (sortBy === "packed") {
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
    console.log("sorted Item: ", sortedItem);
  }

  const handleShorting = function (e) {
    setSortBy(e.target.value);
  };

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => {
          return (
            <Item
              item={item}
              handleDeleteItem={handleDeleteItem}
              handlecheckbox={handlecheckbox}
              key={item.id}
            />
          );
        })}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => handleShorting(e)}>
          <option value="input">Shorts By Input Order</option>
          <option value="description">Shorts By Description</option>
          <option value="packed">Shorts By packed status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}

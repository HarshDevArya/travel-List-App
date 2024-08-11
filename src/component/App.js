import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Mobile", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItem] = useState([]);

  function handleAddItem(item) {
    // console.log(items);
    setItem((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handlecheckbox(id) {
    // setItem((items) => [...items, item]);
    console.log("This is Checkbox:", id);

    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    setItem([]);
  }
  return (
    <>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handlecheckbox={handlecheckbox}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </>
  );
}

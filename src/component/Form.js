import { useState } from "react";
export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [ItemNumber, setItemNumber] = useState(1);
  // const [items, setItem] = useState([]);
  const numberOFIteams = Array.from({ length: 20 }, (_, i) => {
    return i + 1;
  });

  const handleSubmit = function (e) {
    e.preventDefault();
    // console.log(e);
    if (!description) return;
    const newItem = { id: Date.now(), description, ItemNumber, packed: false };
    console.log(newItem);
    onAddItem(newItem);
    setDescription("");
    setItemNumber(1);
  };
  return (
    <div className="add-form">
      <div className="container">
        <form onClick={handleSubmit}>
          <div className="row">
            <div className="col-lg-4 col-12 d-flex align-items-center justify-content-center justify-content-lg-end">
              <h3>What do you need for your trip</h3>
            </div>
            <div className="col-lg-4 col-12 d-flex justify-content-center justify-content-lg-start">
              <select
                value={ItemNumber}
                onChange={(e) => {
                  setItemNumber(Number(e.target.value));
                }}
              >
                {numberOFIteams.map((num) => (
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </select>
              <input
                className="mx-2"
                type="text"
                placeholder="Iteams..."
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-4  mt-lg-0 mt-3 col-12 d-flex align-items-center justify-content-center justify-content-lg-start">
              <button className="addbutton">Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

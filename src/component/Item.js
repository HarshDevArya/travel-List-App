export default function Item({ item, handleDeleteItem, handlecheckbox }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handlecheckbox(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.ItemNumber} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}

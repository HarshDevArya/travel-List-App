export default function Stats({ items }) {
  const numItems = items.length;
  const numberOfPacked = items.filter((item) => item.packed === true).length;
  const precentage = Math.trunc((numberOfPacked * 100) / numItems);
  return (
    <footer className="stats">
      {numItems !== 0 ? (
        precentage === 100 ? (
          <em>You have packed Every thing</em>
        ) : (
          <em>
            💼 You have {numItems} Iteam in your list and you already have
            packed {numberOfPacked} ({precentage}%)
          </em>
        )
      ) : (
        <em>You don't have any Iteam in your list</em>
      )}
    </footer>
  );
}

const MemoItem = ({ memo, onDelete }) => {
  return (
    <li key={memo.id}>
      <h3>{memo.tytle}</h3>
      <p>{memo.body}</p>
      <p>{memo.date}</p>
      <p>
        <button onClick={() => onDelete(memo.id)}>削除</button>
      </p>
    </li>
  );
};

export default MemoItem;

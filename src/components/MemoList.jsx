const MemoList = ({ memos, onDelete }) => {
  return (
    <ul>
      {memos.map((memo) => (
        <li key={memo.id}>
          <h3>{memo.tytle}</h3>
          <p>{memo.body}</p>
          <p>{memo.date}</p>
          <p>
            <button onClick={() => onDelete(memo.id)}>削除</button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MemoList;

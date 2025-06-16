const MemoItem = ({ memo }) => {
  const deleteMemo = (memo) => {
    // setMemos;
  };

  return (
    <div key={memo.id}>
      <h3>{memo.tytle}</h3>
      <p>{memo.body}</p>
      <p>{memo.date}</p>
      <p>
        <button onClick={() => deleteMemo(memo.id)}>削除</button>
      </p>
    </div>
  );
};

export default MemoItem;

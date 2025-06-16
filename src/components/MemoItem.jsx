import { useMemosDispatch } from "../context/MemoContext";

const MemoItem = ({ memo }) => {
  const dispatch = useMemosDispatch();
  const deleteMemo = (memo) => {
    dispatch({ type: "memo/delete", memo });
  };

  return (
    <div key={memo.id}>
      <h3>{memo.tytle}</h3>
      <p>{memo.body}</p>
      <p>{memo.date}</p>
      <p>
        <button onClick={() => deleteMemo(memo)}>削除</button>
      </p>
    </div>
  );
};

export default MemoItem;

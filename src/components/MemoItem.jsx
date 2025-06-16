import { useState } from "react";
import { useMemosDispatch } from "../context/MemoContext";

const MemoItem = ({ memo }) => {
  const [memoEditing, setMemoEditing] = useState(memo.editing);
  const dispatch = useMemosDispatch();
  const deleteMemo = (memo) => {
    dispatch({ type: "memo/delete", memo });
  };
  const editingMemo = () => {
    setMemoEditing(!memoEditing);
  };

  return (
    <>
      {memoEditing ? (
        <div key={memo.id}>
          <h3>{memo.tytle}</h3>
          <p>{memo.body}</p>
          <p>{memo.date}</p>
          <p>
            <button onClick={() => deleteMemo(memo)}>削除</button>
            <button onClick={editingMemo}>編集</button>
          </p>
        </div>
      ) : (
        <button onClick={editingMemo}>完了</button>
      )}
    </>
  );
};

export default MemoItem;

import { useState } from "react";
import { useMemosDispatch } from "../context/MemoContext";

const MemoItem = ({ memo }) => {
  const [memoEditingTytle, setMemoEditingTytle] = useState(memo.tytle);
  const [memoEditingBody, setMemoEditingBody] = useState(memo.body);

  const dispatch = useMemosDispatch();
  const deleteMemo = (memo) => {
    dispatch({ type: "memo/delete", memo });
  };

  const editingMemo = () => {
    const newMemo = {
      ...memo,
      tytle: memoEditingTytle,
      body: memoEditingBody,
      editing: !memo.editing,
    };
    dispatch({ type: "memo/update", memo: newMemo });
  };

  return (
    <div key={memo.id}>
      {memo.editing ? (
        <>
          <h3>{memoEditingTytle}</h3>
          <p>{memoEditingBody}</p>
          <p>{memo.date}</p>
          <p>
            <button onClick={() => deleteMemo(memo)}>削除</button>
            <button onClick={editingMemo}>編集</button>
          </p>
        </>
      ) : (
        <>
          <input
            type="text"
            value={memoEditingTytle}
            onChange={(e) => {
              setMemoEditingTytle(e.target.value);
            }}
          />
          <br />
          <textarea
            value={memoEditingBody}
            onChange={(e) => {
              setMemoEditingBody(e.target.value);
            }}
          />
          <br />
          <button onClick={editingMemo}>完了</button>
        </>
      )}
    </div>
  );
};

export default MemoItem;

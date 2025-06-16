import { useState } from "react";
import { useMemosDispatch } from "../context/MemoContext";

const MemoForm = () => {
  const [tytle, setTytle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useMemosDispatch();

  const addNewMemo = (e) => {
    e.preventDefault();
    if (body.trim() === "") return;
    const newMemo = {
      id: Date.now(),
      tytle,
      body,
      date: new Date().toLocaleString(),
    };
    dispatch({ type: "memo/add", memo: newMemo });
    setTytle("");
    setBody("");
  };

  return (
    <div>
      <form onSubmit={addNewMemo}>
        <input
          type="text"
          value={tytle}
          onChange={(e) => {
            setTytle(e.target.value);
          }}
          placeholder="タイトル"
        />
        <br />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="本文"
        />
        <br />
        <button>追加</button>
      </form>
      <p>*******************</p>
    </div>
  );
};

export default MemoForm;

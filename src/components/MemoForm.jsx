import { memo, useState } from "react";
import { useMemosDispatch } from "../context/MemoContext";

const MemoForm = () => {
  const [tytle, setTytle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useMemosDispatch();

  const addNewMemo = () => {
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
      <input
        type="text"
        value={tytle}
        onChange={(e) => {
          setTytle(e.target.value);
        }}
        placeholder="タイトル"
      />
      <p>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="本文"
        />
      </p>
      <p>
        <button onClick={addNewMemo}>push</button>
      </p>
      <p>*******************</p>
    </div>
  );
};

export default MemoForm;

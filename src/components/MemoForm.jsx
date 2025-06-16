import { useState } from "react";

const MemoForm = () => {
  const [tytle, settytle] = useState("");
  const [body, setBody] = useState("");

  const addNewMemo = () => {
    if (body.trim() === "") return;
    const newMemo = {
      id: Date.now(),
      tytle,
      body,
      date: new Date().toLocaleString(),
    };
    // setMemos;
    setInput("");
    setBody("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
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

import { useState } from "react";
import MemoForm from "./components/MemoForm.jsx";
import MemoLism from "./components/MemoList.jsx";
import MemoList from "./components/MemoList.jsx";

const App = () => {
  const [input, setInput] = useState("");
  const [body, setBody] = useState("");
  const [memos, setMemos] = useState([]);

  const handleAddMemo = () => {
    if (input.trim() === "") return;
    const newMemo = {
      id: Date.now(),
      tytle: input,
      body: body,
      date: new Date().toLocaleString(),
    };

    setMemos([...memos, newMemo]);
    setInput("");
    setBody("");
  };

  const handleDeleteMemo = (id) => {
    const updateMemos = memos.filter((memo) => memo.id !== id);
    setMemos(updateMemos);
  };

  return (
    <div>
      <h2>memo</h2>
      <MemoForm
        input={input}
        setInput={setInput}
        body={body}
        setBody={setBody}
        onAdd={handleAddMemo}
      />
      <MemoList memos={memos} onDelete={handleDeleteMemo} />
    </div>
  );
};

export default App;

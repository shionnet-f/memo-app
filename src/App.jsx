import { useReducer, useState } from "react";
import MemoForm from "./components/MemoForm.jsx";
import MemoList from "./components/MemoList.jsx";

const memoReducer = (memos, action) => {
  switch (action.type) {
    case "memo/add":
      return [...memos, newMemo];
    case "memo/delete":
      return memos.filter((memo) => {
        return memo.id !== action.memo.id;
      });
    default:
      return memos;
  }
};

const App = () => {
  const [memos, dispatch] = useReducer(memoReducer, []);

  return (
    <div>
      <h2>memo</h2>
      <MemoForm
        input={input}
        setInput={setInput}
        body={body}
        setBody={setBody}
      />
      <MemoList memos={memos} onDelete={handleDeleteMemo} />
    </div>
  );
};

export default App;

import { createContext, useContext, useReducer } from "react";

const MemoContext = createContext();
const MemoContextDispatch = createContext();

const memoReducer = (memos, action) => {
  switch (action.type) {
    case "memo/add":
      return [...memos, action.memo];
    case "memo/delete":
      return memos.filter((memo) => {
        return memo.id !== action.memo.id;
      });
    case "memo/update":
      return memos.map((_memo) => {
        return _memo.id === action.memo.id
          ? { ..._memo, ...action.memo }
          : { ..._memo };
      });
    default:
      return memos;
  }
};

const MemoProvider = ({ children }) => {
  const [memos, dispatch] = useReducer(memoReducer, []);
  return (
    <MemoContext.Provider value={memos}>
      <MemoContextDispatch.Provider value={dispatch}>
        {children}
      </MemoContextDispatch.Provider>
    </MemoContext.Provider>
  );
};

const useMemos = () => useContext(MemoContext);
const useMemosDispatch = () => useContext(MemoContextDispatch);

export { MemoProvider, useMemos, useMemosDispatch };

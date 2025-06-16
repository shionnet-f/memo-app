import { useMemos } from "../context/MemoContext";
import MemoItem from "./MemoItem";

const MemoList = () => {
  const memos = useMemos();
  return (
    <>
      <ul>
        {memos.map((memo) => (
          <MemoItem key={memo.id} memo={memo} />
        ))}
      </ul>
    </>
  );
};

export default MemoList;

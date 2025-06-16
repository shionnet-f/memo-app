import MemoItem from "./MemoItem";

const MemoList = ({ memos }) => {
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

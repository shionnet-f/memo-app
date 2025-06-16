const MemoForm = ({ input, setInput, body, setBody, onAdd }) => {
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
        <button onClick={onAdd}>push</button>
      </p>
      <p>*******************</p>
    </div>
  );
};

export default MemoForm;

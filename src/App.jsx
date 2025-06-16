import MemoForm from "./components/MemoForm.jsx";
import MemoList from "./components/MemoList.jsx";
import { MemoProvider } from "./context/MemoContext.jsx";

const App = () => {
  return (
    <MemoProvider>
      <h3>memo</h3>
      <MemoForm />
      <h3>memo一覧</h3>
      <MemoList />
    </MemoProvider>
  );
};

export default App;

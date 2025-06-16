import MemoForm from "./components/MemoForm.jsx";
import MemoList from "./components/MemoList.jsx";
import { MemoProvider } from "./context/MemoContext.jsx";

const App = () => {
  return (
    <MemoProvider>
      <h2>memo</h2>
      <MemoForm />
      <MemoList />
    </MemoProvider>
  );
};

export default App;
